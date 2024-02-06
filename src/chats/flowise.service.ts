import { Injectable, Inject } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { HistoryItem } from './chat-run-res.dto';

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
    return list.map((item) => {
      return {
        type: item.type === 'sender' ? 'userMessage' : 'apiMessage',
        message: item.content,
      };
    });
  }

  private formatResult(res) {
    return {
      chatId: res['chatId'],
      type: 'receiver',
      content: res['text'],
    };
  }

  async prediction(
    apiUrl: string,
    apiKey: string,
    input: string,
    history: HistoryItem[],
  ) {
    const formattedHistory = this.formatHistory(history);
    const body = {
      input,
      history: formattedHistory,
    };

    const flowiseRes = await firstValueFrom(
      this.httpService
        .post(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`, // apiKey,
          },
          body: body,
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log('AxiosError', error);
            const errorData: any = error.response.data;
            this.logger.error('error:', errorData, ' with endpoint:', apiUrl);
            throw Error(`错误 with ${apiUrl}, ${errorData?.errmsg}`);
          }),
        ),
    );

    this.logger.info(flowiseRes);
    return this.formatResult(flowiseRes.data);
  }
}
