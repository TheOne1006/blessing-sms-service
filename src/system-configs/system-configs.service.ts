import * as _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { SystemConfig } from './system-configs.entity';
import {
  UpdateSystemConfigDto,
  CreateSystemConfigDto,
  SystemConfigDto,
} from './dtos';

@Injectable()
export class SystemConfigsService {
  constructor(
    @InjectModel(SystemConfig)
    private readonly mainModel: typeof SystemConfig,
  ) {}

  async create(
    createSystemConfigDto: CreateSystemConfigDto,
  ): Promise<SystemConfigDto> {
    const data = new SystemConfig(createSystemConfigDto);
    const instance = await data.save();

    return instance;
  }

  async findAll(): Promise<SystemConfig[]> {
    return this.mainModel.findAll();
  }

  async findByPk(id: string): Promise<SystemConfig> {
    return this.mainModel.findByPk(id);
  }

  async removeByPk(id: string): Promise<SystemConfig> {
    const data = await this.findByPk(id);
    await data.destroy();
    return data;
  }

  async updateByPk(
    id: string,
    updateSystemConfigDto: UpdateSystemConfigDto,
  ): Promise<SystemConfig> {
    const data = await this.findByPk(id);

    let needsUpdate = false;
    _.map(updateSystemConfigDto, (value: any, key: string) => {
      const originalValue = data.get(key);
      if (value !== originalValue) {
        needsUpdate = true;
        data[key] = value;
      }
    });

    return needsUpdate ? data.save() : data;
  }
}
