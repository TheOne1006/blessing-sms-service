export interface HistoryItem {
  type: 'sender' | 'receiver';
  content: string;
}

/**
 * ChatDto
 */
export class ChatRunResDto {
  id: number;
  history: HistoryItem[];
  query: string;
}
