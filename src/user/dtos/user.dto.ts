import { Exclude } from 'class-transformer';

/**
 * UserDto
 */
export class UserDto {
  id: number;

  openid: string;

  unionid: string;

  session: string;

  token: string;

  credit: number;

  roles: string[];

  @Exclude()
  updatedAt: Date;

  @Exclude()
  createdAt: Date;

  @Exclude()
  isDeleted: boolean;

  @Exclude()
  version: number;
}
