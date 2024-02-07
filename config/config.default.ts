import { Dialect } from 'sequelize/types';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * @ignore
 * 配置项接口
 */
export interface Iconfig {
  sequelize: {
    username?: string;
    password?: any;
    database?: string;
    host: string;
    storage: string;
    dialect: Dialect;
    logging: any;
    timezone?: string;
  };
  logger: {
    appName: string;
    level: string;
    filename?: string;
    timestamp?: boolean;
    uncolorize?: boolean;
  };
  language: string;
  swagger: {
    enable: boolean;
    endPoint: string;
  };
  API_V1: string;
  WX_SERVER: {
    APPID: string;
    SECRET: string;
    GRANT_TYPE: string;
  };
}

/**
 * @ignore
 * 默认配置信息
 */
export const config: Iconfig = {
  sequelize: {
    username: 'root',
    password: null,
    storage: join(__dirname, '../..', './databases/db/database.dev.sqlite'),
    host: 'localhost',
    dialect: 'sqlite' as Dialect,
    logging: console.log,
  },
  language: 'zh-cn',
  logger: {
    appName: 'example',
    level: 'info',
    timestamp: true,
    // filename: 'log/all.log',
  },
  swagger: {
    enable: true,
    endPoint: 'api',
  },
  API_V1: 'v1',
  WX_SERVER: {
    APPID: process.env.APPID,
    SECRET: process.env.SECRET,
    GRANT_TYPE: 'authorization_code',
  },
};
