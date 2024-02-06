import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Suggest } from './suggent.entity';
import { SuggestDto } from './suggent.dto';

/**
 * Suggest Service
 *
 */
@Injectable()
export class SuggestService {
  constructor(
    @InjectModel(Suggest)
    private readonly suggestModel: typeof Suggest,
  ) {}

  async create(suggest: string, userId: number): Promise<SuggestDto> {
    const data = new this.suggestModel({
      suggest,
      userId,
    });

    const instance = await data.save();

    return instance;
  }
}
