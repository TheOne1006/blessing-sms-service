import { Exclude } from 'class-transformer';

/**
 * SuggestDto
 */
export class SuggestDto {
  id: number;

  suggest: string;

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
