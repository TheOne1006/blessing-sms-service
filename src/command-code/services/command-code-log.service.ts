import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions, Transaction } from 'sequelize';
import { CommandCodeLog } from '../entites';
import { CommandCodeLogDto } from '../dtos';

/**
 * CommandCodeLog Service
 *
 */
@Injectable()
export class CommandCodeLogService {
  constructor(
    @InjectModel(CommandCodeLog)
    private readonly mainModel: typeof CommandCodeLog,
  ) {}
  async create(
    createDataDto: Partial<CommandCodeLog>,
    transaction: Transaction,
  ): Promise<CommandCodeLog> {
    const data = new this.mainModel({
      ...createDataDto,
    });

    const instance = await data.save({
      transaction,
    });

    return instance;
  }

  /**
   * @param {WhereOptions} where
   * @returns {Promise<CommandCodeDto>}
   */
  async findOne(where?: WhereOptions): Promise<CommandCodeLogDto> {
    return this.mainModel.findOne({
      where,
    });
  }
}
