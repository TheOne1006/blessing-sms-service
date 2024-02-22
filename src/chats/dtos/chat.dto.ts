import { Exclude } from 'class-transformer';

/**
 * ChatDto
 */
export class ChatDto {
  id: number;

  title: string;

  iconUrl: string;

  btnText: string;

  desc: string;

  welcome: string;

  credit: number;

  enabled: boolean;

  @Exclude()
  apiUrl: string;

  @Exclude()
  apiKey: string;

  @Exclude()
  type: string;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  createdAt: Date;

  @Exclude()
  isDeleted: boolean;

  @Exclude()
  version: number;
}
