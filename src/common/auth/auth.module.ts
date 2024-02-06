import {
  Module,
  // HttpModule,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthMiddleware } from './auth.middleware';
import { AuthService } from './auth.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.entity';

@Module({
  imports: [
    CacheModule.register({
      // 1 hour
      ttl: 20 * 60 * 1000, // milliseconds
      max: 30, // maximum number of items in cache
    }),
    SequelizeModule.forFeature([User]),
    // HttpModule,
    // AppRedisModule,
  ],
  providers: [AuthService, UserService],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /**
     * 全局验证支持 authmiddleware
     */
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
