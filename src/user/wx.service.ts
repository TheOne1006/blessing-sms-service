import { Injectable, Inject } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { config } from '../../config';

const { APPID, SECRET, GRANT_TYPE } = config.WX_SERVER;

@Injectable()
export class WxService {
  /**
   * @param httpService nest 默认 httpService
   * @param logger 日志服务
   */
  constructor(
    private readonly httpService: HttpService,
    @Inject(WINSTON_MODULE_PROVIDER) protected readonly logger: Logger,
  ) {}

  /**
   * 获取微信用户信息
   * @param code string
   * @returns Promise
   */
  async wxCode2session(code: string): Promise<any> {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=${GRANT_TYPE}`;

    return firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          console.log('AxiosError', error);
          const errorData: any = error.response.data;
          this.logger.error('error:', errorData, ' with endpoint:', url);
          throw Error(`错误 with ${url}, ${errorData?.errmsg}`);
        }),
      ),
    );
  }
}
