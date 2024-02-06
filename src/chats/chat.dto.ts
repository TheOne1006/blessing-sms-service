import { Exclude } from 'class-transformer';

/**
 * ChatDto
 */
export class ChatDto {
  id: number;

  title: string;

  apiUrl: string;

  apiKey: string;

  enabled: boolean;

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
