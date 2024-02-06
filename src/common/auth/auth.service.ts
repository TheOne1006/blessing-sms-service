import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
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
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
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
    const cacheKey = `user-${token}`;
    const value = await this.cacheManager.get<string>(cacheKey);
    if (value) {
      const token_user = JSON.parse(value);
      return token_user;
    }

    try {
      const token_user = await this.userService.findOne({ token });
      user.id = token_user.id;
      user.openid = token_user.openid;
      user.roles = token_user.roles;
      user.unionid = token_user.unionid;
      user.token = token_user.token;
      user.session = token_user.session;
      user.credit = token_user.credit;
      await this.cacheManager.set(cacheKey, JSON.stringify(user));
    } catch (error) {
      this.logger.error('token is error');
    }
    return user;
  }
}
