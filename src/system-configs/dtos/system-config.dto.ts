import { ApiProperty } from '@nestjs/swagger';
import { SystemConfigBase } from './system-config-base.dto';
import { Exclude } from 'class-transformer';

/**
 * @extends {SystemConfigBase}
 */
export class SystemConfigDto extends SystemConfigBase {
  @ApiProperty({
    example: '',
    description: 'id',
  })
  id: number;

  @ApiProperty({
    example: '',
    description: 'version',
  })
  @Exclude()
  version: number;
}
