import { Exclude } from 'class-transformer';

/**
 * CommandCodeLogDto
 */
export class CommandCodeLogDto {
  id: number;

  code: string;

  userId: number;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  createdAt: Date;

  @Exclude()
  isDeleted: boolean;

  @Exclude()
  version: number;
}
