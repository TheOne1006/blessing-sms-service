import {
  Controller,
  Get,
  UseInterceptors,
  UseGuards,
  Body,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiSecurity,
  ApiResponse,
  ApiParam,
  // ApiQuery,
} from '@nestjs/swagger';

import { SerializerInterceptor } from '../common/interceptors/serializer.interceptor';
import { Roles, SerializerClass, User } from '../common/decorators';
import { RolesGuard } from '../common/auth';
import { ROLE_AUTHENTICATED, ROLE_SUPER_ADMIN } from '../common/constants';
import { RequestUser } from '../common/interfaces';
import { ChatRunResDto, ChatDto, ChatRunRepDto } from './dtos';

import { config } from '../../config';
import { ChatService } from './chat.service';
import { UserService } from '../user/user.service';
import { FlowiseService } from './flowise.service';

const prefix = config.API_V1;

@Controller(`${prefix}/chats`)
@ApiSecurity('api_key')
@ApiTags('chat')
@UseInterceptors(SerializerInterceptor)
@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService,
    private readonly flowiseService: FlowiseService,
  ) {}

  /**
   * 查看可用
   *
   */
  @Get()
  @ApiOperation({
    summary: '可用列表',
  })
  @SerializerClass(ChatDto)
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async list(): Promise<ChatDto[]> {
    const ins = await this.chatService.findAll({
      enabled: true,
    });

    return ins;
  }

  /**
   * 获取用户自身数据
   *
   * @param user
   */
  @Post(':id/run')
  @UseGuards(RolesGuard)
  @Roles(ROLE_AUTHENTICATED)
  @ApiOperation({
    summary: '执行生成',
  })
  @SerializerClass(ChatRunRepDto)
  @ApiParam({
    name: 'id',
    required: true,
    description: 'chat id',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async run(
    @Param('id') id: number,
    @Body() resData: ChatRunResDto,
    @User() user: RequestUser,
  ): Promise<ChatRunRepDto> {
    const ins = await this.chatService.findByPk(id);

    if (!ins.enabled) {
      throw new Error('chat is not enabled');
    }
    // 超级用户不扣积分
    if (!(ROLE_SUPER_ADMIN in user.roles)) {
      await this.userService.reduceCreditByPk(user.id, ins.credit);
    }

    try {
      const result = await this.flowiseService.prediction(
        ins.apiUrl,
        ins.apiKey,
        resData.query,
        resData.history,
        resData.taskId,
      );
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
