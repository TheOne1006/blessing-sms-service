import { pick, map } from 'lodash';
import { Transaction, SaveOptions } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './user.entity';
import { UserDto } from './dtos';

/**
 * User Service
 *
 */
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  /**
   * 创建用户
   * @param  {Partial<UserDto>} createUserDto
   * @returns Promise
   */
  async create(createUserDto: Partial<UserDto>): Promise<UserDto> {
    const data = new User({
      ...createUserDto,
    });

    const instance = await data.save();

    return instance;
  }

  /**
   * 查找所有用户
   * @returns Promise<UserDto[]>
   */
  async findAll(): Promise<UserDto[]> {
    return this.userModel.findAll();
  }

  /**
   * 根据id,查找用户
   * @param id number
   * @returns Promise<UserDto>
   */
  async findByPk(id: number): Promise<UserDto> {
    return this.userModel.findByPk(id);
  }

  /**
   * 根据token,查找用户
   * @param {token} token
   * @returns Promise<UserDto>
   */
  async findByToken(token: string): Promise<UserDto> {
    return this.userModel.findOne({
      where: {
        token,
      },
    });
  }

  /**
   * 根据id, 删除用户
   * @param id number
   * @returns Promise<UserDto>
   */
  async removeByPk(id: number, transaction?: Transaction): Promise<UserDto> {
    const data = await this.userModel.findByPk(id);

    const options: SaveOptions = {};
    if (transaction) {
      options.transaction = transaction;
    }

    await data.destroy(options);

    return data;
  }

  /**
   * 更新用户
   * @param {number} id
   * @param {Partial<UserDto>} updateUserDto
   * @returns {Promise<UserDto>}
   */
  async updateByPk(
    id: number,
    updateUserDto: Partial<UserDto>,
    transaction?: Transaction,
  ): Promise<UserDto> {
    const instance = await this.userModel.findByPk(id);

    if (!instance) {
      throw new Error('instance not found');
    }

    const options: SaveOptions = {};
    if (transaction) {
      options.transaction = transaction;
    }

    const pickData = pick(updateUserDto, [
      'openid',
      'session',
      'token',
      'credit',
    ]);

    map(pickData, (value: any, key: string) => {
      const originalValue = instance.get(key);
      if (value !== originalValue) {
        instance[key] = value;
      }
    });

    await instance.save();

    return instance;
  }

  // 减少 credit
  async reduceCreditByPk(id: number, userCredit: number): Promise<number> {
    /**
     * 减少 userCredit 当 credit > userCredit
     */
    const [affectedCount] = await this.userModel.update(
      {
        credit: this.userModel.sequelize.literal(`credit - ${userCredit}`),
      },
      {
        where: {
          id,
          credit: {
            $gte: userCredit,
          },
        },
      },
    );

    return affectedCount;
  }
}
