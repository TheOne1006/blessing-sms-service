/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommandCodeController } from './controllers/command-code.controller';
import { CommandCode, CommandCodeLog } from './entites';
import { CommandCodeLogService, CommandCodeService } from './services';
import { AuthModule } from '../common/auth';

import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([CommandCode, CommandCodeLog, User]),
    AuthModule,
  ],
  controllers: [CommandCodeController],
  providers: [CommandCodeLogService, CommandCodeService, UserService],
})
export class CommandCodeModule {}
