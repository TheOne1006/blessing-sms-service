/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SuggentController } from './suggent.controller';
import { Suggest } from './suggent.entity';
import { SuggestService } from './suggent.service';
import { AuthModule } from '../common/auth';

@Module({
  imports: [SequelizeModule.forFeature([Suggest]), AuthModule],
  controllers: [SuggentController],
  providers: [SuggestService],
})
export class SuggestModule {}
