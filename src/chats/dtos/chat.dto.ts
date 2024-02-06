import { Exclude } from 'class-transformer';

/**
 * ChatDto
 */
export class ChatDto {
  id: number;

  title: string;

  @Exclude()
  apiUrl: string;

  @Exclude()
  apiKey: string;

  enabled: boolean;

  @Exclude()
  type: string;

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
