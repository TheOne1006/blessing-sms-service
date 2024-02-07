import { Dialect } from 'sequelize/types';

/**
 * 开发环境配置
 */
export const config = {
  sequelize: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_ENGINE as Dialect,
    logging: false,
  },
  logger: {
    appName: 'example',
    level: 'info',
    timestamp: true,
    // filename: 'log/all.log',
  },
};
