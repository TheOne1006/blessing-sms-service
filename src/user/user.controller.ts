import {
  Controller,
  Get,
  UseInterceptors,
  UseGuards,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiSecurity,
  ApiResponse,
  // ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

import { SerializerInterceptor } from '../common/interceptors/serializer.interceptor';
import { Roles, SerializerClass, User } from '../common/decorators';
import { RolesGuard } from '../common/auth';
import {
  ROLE_AUTHENTICATED,
  ROLE_SUPER_ADMIN,
  ROLE_USER,
} from '../common/constants';
import { RequestUser } from '../common/interfaces';
import { UserDto } from './dtos';

import { config } from '../../config';
import { UserService } from './user.service';
import { WxService } from './wx.service';

const prefix = config.API_V1;

@Controller(`${prefix}/users`)
@ApiSecurity('api_key')
@ApiTags('user')
@UseInterceptors(SerializerInterceptor)
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly wxService: WxService,
  ) {}
  /**
   * 获取所有用户信息
   *
   */
  @Get('/')
  @UseGuards(RolesGuard)
  @ApiOperation({
    summary: '用户信息',
  })
  @Roles(ROLE_SUPER_ADMIN)
  @SerializerClass(UserDto)
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async list(): Promise<UserDto[]> {
    const users = await this.userService.findAll();

    return users;
  }

  /**
   * 获取用户自身数据
   *
   * @param user
   */
  @Get('/current')
  @UseGuards(RolesGuard)
  @Roles(ROLE_AUTHENTICATED)
  @ApiOperation({
    summary: '获取当前用户',
  })
  @SerializerClass(UserDto)
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getUserCurrent(@User() user: RequestUser): Promise<RequestUser> {
    return user;
  }

  /**
   * 换取微信 wxInfo
   *
   * @param user
   */
  @Get('wxCode2session')
  @ApiOperation({
    summary: 'code2session',
  })
  @ApiQuery({
    name: 'code',
    example: 'xxxx',
    description: 'code',
    type: String,
  })
  @SerializerClass(UserDto)
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async wxCode2session(@Query('code') code: string): Promise<UserDto> {
    try {
      const wxInfo = await this.wxService.wxCode2session(code);

      const findUser = await this.userService.findOne({
        openid: wxInfo.openid,
      });

      const newToken = this.userService.generateToken(wxInfo.openid);

      if (findUser) {
        // 更新
        const updateInfo = {
          token: newToken,
          unionid: wxInfo.unionid,
          session: wxInfo.session_key,
        };

        const user = await this.userService.updateByPk(findUser.id, updateInfo);

        return user;
      }

      // 插入
      const newUserInfo = {
        openid: wxInfo.openid,
        unionid: wxInfo.unionid,
        session: wxInfo.session_key,
        token: newToken,
        // 基础 积分
        credit: 30,
        roles: [ROLE_AUTHENTICATED, ROLE_USER],
      };

      const user = await this.userService.create(newUserInfo);
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(`wxCode2session error with ${error.message}`);
    }
  }
}
