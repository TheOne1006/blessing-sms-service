/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { WxService } from './wx.service';
import { AuthModule } from '../common/auth';

@Module({
  imports: [HttpModule, SequelizeModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService, WxService],
})
export class UsersModule {}
