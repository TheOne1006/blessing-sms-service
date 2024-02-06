import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiSecurity,
  ApiResponse,
} from '@nestjs/swagger';

import { SerializerInterceptor } from '../common/interceptors/serializer.interceptor';
import { Roles, SerializerClass, User } from '../common/decorators';
import { RolesGuard } from '../common/auth';
import { ROLE_AUTHENTICATED } from '../common/constants';
import { RequestUser } from '../common/interfaces';

import { config } from '../../config';
import { SuggestService } from './suggent.service';
import { CreateSuggestDto } from './create-suggent.dto';
import { SuggestDto } from './suggent.dto';

const prefix = config.API_V1;

@UseGuards(RolesGuard)
@Roles(ROLE_AUTHENTICATED)
@Controller(`${prefix}/suggent`)
@ApiSecurity('api_key')
@ApiTags('suggent')
@UseInterceptors(SerializerInterceptor)
@Controller('suggent')
export class SuggentController {
  constructor(private readonly mainService: SuggestService) {}

  /**
   * 创建新实例
   */
  @Post()
  @Roles(ROLE_AUTHENTICATED)
  @ApiOperation({
    summary: '创建新实例',
  })
  @SerializerClass(SuggestDto)
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(
    @Body() newDataDto: CreateSuggestDto,
    @User() owner: RequestUser,
  ): Promise<SuggestDto> {
    const newData = await this.mainService.create(newDataDto.suggest, owner.id);

    return newData;
  }
}
