import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
// import * as Redis from 'ioredis';
// import { RedisService } from 'nestjs-redis';
import { RequestUser } from '../interfaces';
import { UserService } from '../../user/user.service';

/**
 * 用户认证
 */
@Injectable()
export class AuthService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly userService: UserService,
  ) {}

  /**
   * 检查 token
   *
   * @param  {string} token
   * @param  {string} ip
   * @returns Promise
   */
  async check(token: string, ip: string): Promise<RequestUser> {
    const user = {
      id: null,
      roles: [],
      ip,
      openid: '',
      unionid: '',
      session: '',
      token: '',
      credit: 0,
    } as RequestUser;

    if (!token) {
      return user;
    }

    try {
      const token_user = await this.userService.findByToken(token);
      user.id = token_user.id;
      user.openid = token_user.openid;
      user.roles = token_user.roles;
      user.unionid = token_user.unionid;
      user.token = token_user.token;
      user.session = token_user.session;
      user.credit = token_user.credit;
    } catch (error) {
      this.logger.error('token is error');
    }
    return user;
  }
}
