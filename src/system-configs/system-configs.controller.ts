import * as Ajv from 'ajv';
import {
  // Body,
  Controller,
  Get,
  // Post,
  UseInterceptors,
  // UseGuards,
  // SerializeOptions,
  // ClassSerializerInterceptor,
} from '@nestjs/common';
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiTags,
  ApiSecurity,
} from '@nestjs/swagger';

import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

import {
  // Roles,
  SerializerClass,
} from '../common/decorators';
// import { ROLE_SUPER_ADMIN } from '../common/constants';
// import { RolesGuard } from '../common/auth';
import { SerializerInterceptor } from '../common/interceptors/serializer.interceptor';

import { SystemConfigsService } from './system-configs.service';

import {
  SystemConfigDto,
  // CreateSystemConfigDto,
  // UpdateSystemConfigDto,
} from './dtos';

import { config } from '../../config';

const prefix = config.API_V1;

// @UseGuards(RolesGuard)
@Controller(`${prefix}/system-configs`)
@UseInterceptors(SerializerInterceptor)
@SerializerClass(SystemConfigDto)
@ApiSecurity('api_key')
@ApiTags('system-configs')
@Controller('system-configs')
export class SystemConfigsController {
  constructor(private readonly systemConfigsService: SystemConfigsService) {}

  validateValue(value: any, rules: any) {
    const ajv = new Ajv();

    const isValid = ajv.validate(rules, value);

    if (!isValid) {
      throw new Error(ajv.errorsText(ajv.errors));
    }
  }

  // @Post()
  // @Roles(ROLE_SUPER_ADMIN)
  // @ApiOperation({
  //   summary: '创建系统配置',
  // })
  // async create(
  //   @Body() createSystemConfigDto: CreateSystemConfigDto,
  // ): Promise<SystemConfigDto> {
  //   const matchKey = `${createSystemConfigDto.format}Value`;
  //   this.validateValue(
  //     createSystemConfigDto[matchKey],
  //     createSystemConfigDto.rules,
  //   );

  //   const instance = await this.systemConfigsService.create(
  //     createSystemConfigDto,
  //   );

  //   return instance;
  // }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('config-lists')
  @ApiOperation({ summary: '配置列表' })
  @SerializerClass(SystemConfigDto)
  async findAll(): Promise<SystemConfigDto[]> {
    const list = await this.systemConfigsService.findAll();
    return list;
  }

  @Get('/wx-mini')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('wx-mini-config')
  @ApiOperation({ summary: '配置信息' })
  async findAllWxMini(): Promise<{ [key: string]: any }> {
    const list = await this.systemConfigsService.findAll();
    const dist = {};

    list.forEach((item) => {
      switch (item.format) {
        case 'array':
          dist[item.key] = item.arrayValue;
          break;
        case 'int':
          dist[item.key] = item.intValue;
          break;
        case 'float':
          dist[item.key] = item.floatValue;
          break;
        case 'json':
          dist[item.key] = item.jsonValue;
          break;
        case 'boolean':
          dist[item.key] = item.booleanValue;
          break;
        default:
          dist[item.key] = item.textValue;
          break;
      }
    });

    return dist;
  }
}
