import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from 'sequelize';

import { CommandCode } from '../entites';
import { CommandCodeDto } from '../dtos';

/**
 * CommandCode Service
 *
 */
@Injectable()
export class CommandCodeService {
  constructor(
    @InjectModel(CommandCode)
    private readonly mainModel: typeof CommandCode,
  ) {}
  /**
   * @param {WhereOptions} where
   * @returns {Promise<CommandCodeDto>}
   */
  async findOne(where?: WhereOptions): Promise<CommandCodeDto> {
    return this.mainModel.findOne({
      where,
    });
  }
}
