/* istanbul ignore file */
import { Module } from '@nestjs/common';

// import {
//   utilities as nestWinstonModuleUtilities,
//   WinstonModule,
// } from 'nest-winston';
import { CoreModule } from './core/core.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { SuggestModule } from './suggent/suggent.module';
import { CommandCodeModule } from './command-code/commandCode.module';
import { SystemConfigsModule } from './system-configs/system-configs.module';
import { ChatModule } from './chats/chat.module';

@Module({
  imports: [
    CoreModule,
    UsersModule,
    SuggestModule,
    CommandCodeModule,
    SystemConfigsModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
