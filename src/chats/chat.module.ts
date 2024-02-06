/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { ChatController } from './chat.controller';
import { Chat } from './chat.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { ChatService } from './chat.service';
import { FlowiseService } from './flowise.service';
import { AuthModule } from '../common/auth';

@Module({
  imports: [
    HttpModule,
    SequelizeModule.forFeature([Chat, User]),
    AuthModule,
    CacheModule.register({
      // 1 hour
      ttl: 60 * 60 * 1000, // milliseconds
      max: 10, // maximum number of items in cache
    }),
  ],
  controllers: [ChatController],
  providers: [ChatService, FlowiseService, UserService],
})
export class ChatModule {}
