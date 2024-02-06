import { Exclude } from 'class-transformer';

/**
 * CommandCodeDto
 */
export class CommandCodeDto {
  id: number;

  code: string;

  credit: number;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  createdAt: Date;

  @Exclude()
  isDeleted: boolean;

  @Exclude()
  version: number;
}
