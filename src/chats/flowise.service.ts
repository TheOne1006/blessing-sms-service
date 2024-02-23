import { Injectable, Inject } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import {
  HistoryItem,
  FlowiseResDto,
  ChatRunRepDto,
  ChatSuggestionRepDto,
} from './dtos';

interface FlowHistoryItem {
  message: string;
  type: 'apiMessage' | 'userMessage';
}

@Injectable()
export class FlowiseService {
  /**
   * @param httpService nest 默认 httpService
   * @param logger 日志服务
   */
  constructor(
    private readonly httpService: HttpService,
    @Inject(WINSTON_MODULE_PROVIDER) protected readonly logger: Logger,
  ) {}

  private formatHistory(list: HistoryItem[]): FlowHistoryItem[] {
    return list
      .filter((item) => item.content && item.type)
      .map((item) => {
        return {
          type: item.type === 'sender' ? 'userMessage' : 'apiMessage',
          message: item.content,
        };
      });
  }

  private formatResult(res: FlowiseResDto): ChatRunRepDto {
    return {
      taskId: res.chatId,
      type: 'receiver',
      content: res.text,
    };
  }

  async prediction(
    apiUrl: string,
    apiKey: string,
    input: string,
    history: HistoryItem[],
    taskId: string = '',
  ): Promise<ChatRunRepDto> {
    const formattedHistory = this.formatHistory(history);
    const body: any = {
      question: input,
      history: formattedHistory,
    };

    if (taskId) {
      body.chatId = taskId;
    }

    const flowiseRes = await firstValueFrom(
      this.httpService
        .post<FlowiseResDto>(apiUrl, body, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`, // apiKey,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            // console.error('AxiosError', error);
            const errorData: any = error.response.data;
            this.logger.error('error:', errorData, ' with endpoint:', apiUrl);
            throw Error(`错误 with ${apiUrl}, ${errorData}`);
          }),
        ),
    );

    return this.formatResult(flowiseRes.data);
  }

  async suggestion(
    apiUrl: string,
    apiKey: string,
    input: string = '',
    history: HistoryItem[] = [],
  ): Promise<string[]> {
    const formattedHistory = this.formatHistory(history);
    const body: any = {
      question: input,
      history: formattedHistory,
    };

    const flowiseRes = await firstValueFrom(
      this.httpService
        .post<ChatSuggestionRepDto>(apiUrl, body, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`, // apiKey,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            // console.error('AxiosError', error);
            const errorData: any = error.response.data;
            this.logger.error(
              'suggestion error:',
              errorData,
              ' with endpoint:',
              apiUrl,
            );
            throw Error(`错误 with ${apiUrl}, ${errorData}`);
          }),
        ),
    );

    return flowiseRes.data.suggestions;
  }
}
