import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from 'sequelize';

import { Chat } from './chat.entity';
import { ChatDto } from './dtos/chat.dto';

/**
 * CommandCode Service
 *
 */
@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat)
    private readonly mainModel: typeof Chat,
  ) {}

  async findByPk(id: number): Promise<ChatDto> {
    return this.mainModel.findByPk(id);
  }

  /**
   * @param {WhereOptions} where
   * @returns {Promise<ChatDto>}
   */
  async findOne(where?: WhereOptions): Promise<ChatDto> {
    return this.mainModel.findOne({
      where,
    });
  }

  /**
   * @param {WhereOptions} where
   * @returns {Promise<ChatDto[]>}
   */
  async findAll(where?: WhereOptions): Promise<ChatDto[]> {
    return this.mainModel.findAll({
      where,
    });
  }
}
