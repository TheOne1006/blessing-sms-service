import {
  Controller,
  // Post,
  // Body,
  UseInterceptors,
  UseGuards,
  Get,
  Query,
  Inject,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiSecurity,
  ApiResponse,
  ApiQuery,
} from '@nestjs/swagger';

import { SerializerInterceptor } from '../../common/interceptors/serializer.interceptor';
import { Roles, SerializerClass, User } from '../../common/decorators';
import { RolesGuard } from '../../common/auth';
import { ROLE_AUTHENTICATED } from '../../common/constants';
import { RequestUser } from '../../common/interfaces';

import { config } from '../../../config';
import { CommandCodeLogService, CommandCodeService } from '../services';
import { UserService } from '../../user/user.service';
import { UserDto } from '../../user/dtos/user.dto';
// import { CommandCodeDto, CommandCodeLogDto } from '../dtos';
import { Sequelize } from 'sequelize-typescript';

const prefix = config.API_V1;

@UseGuards(RolesGuard)
@Roles(ROLE_AUTHENTICATED)
@Controller(`${prefix}/command-code`)
@ApiSecurity('api_key')
@ApiTags('command-code')
@UseInterceptors(SerializerInterceptor)
@Controller('command-code')
export class CommandCodeController {
  constructor(
    private readonly mainService: CommandCodeService,
    private readonly logService: CommandCodeLogService,
    private readonly userService: UserService,
    @Inject(Sequelize)
    protected readonly sequelize: Sequelize,
  ) {}

  @Get('redeem')
  @Roles(ROLE_AUTHENTICATED)
  @ApiOperation({
    summary: '兑换',
  })
  @ApiQuery({
    name: 'code',
    required: true,
    type: String,
  })
  @SerializerClass(UserDto)
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(
    @Query() code: string,
    @User() owner: RequestUser,
  ): Promise<UserDto> {
    const commandCodeIns = await this.mainService.findOne({ code });

    if (!commandCodeIns) {
      throw new Error('无效兑换码');
    }

    const log = await this.logService.findOne({
      userId: owner.id,
      code,
    });

    if (log) {
      throw new Error('已兑换，无法重复兑换');
    }

    const transaction = await this.sequelize.transaction();

    try {
      await this.logService.create(
        {
          userId: owner.id,
          code,
        },
        transaction,
      );

      const user = await this.userService.updateByPk(
        owner.id,
        {
          credit: owner.credit + commandCodeIns.credit,
        },
        transaction,
      );

      await transaction.commit();

      return user;
    } catch (error) {
      await transaction.rollback();
      // throw error;
    }

    return owner as UserDto;
  }
}
