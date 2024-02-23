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

  suggestionEnabled: boolean;

  replayEnabled: boolean;

  startSuggestions: string[];

  @Exclude()
  apiUrl: string;

  @Exclude()
  suggestionApiUrl: string;

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
