import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SystemConfigsController } from './system-configs.controller';
import { SystemConfig } from './system-configs.entity';
import { CacheModule } from '@nestjs/cache-manager';
import { SystemConfigsService } from './system-configs.service';

@Module({
  imports: [
    SequelizeModule.forFeature([SystemConfig]),
    CacheModule.register({
      // 1 hour
      ttl: 60 * 60 * 1000, // milliseconds
      max: 10, // maximum number of items in cache
    }),
  ],
  controllers: [SystemConfigsController],
  providers: [SystemConfigsService],
})
export class SystemConfigsModule {}
