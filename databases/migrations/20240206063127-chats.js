'use strict';

const tableName = 'chats';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { BOOLEAN, TEXT, INTEGER, DATE, STRING } = Sequelize;

    await queryInterface.createTable(
      tableName,
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'id',
        },
        title: {
          type: STRING(150),
          allowNull: false,
          comment: '标题',
        },
        welcome: {
          type: TEXT,
          allowNull: true,
          comment: '欢迎标语',
        },
        icon_url: {
          type: STRING(150),
          allowNull: true,
          comment: 'icon url',
        },
        api_url: {
          type: STRING(150),
          allowNull: false,
          comment: 'api url',
        },
        api_key: {
          type: STRING(50),
          allowNull: false,
          comment: 'api key',
        },
        enabled: {
          defaultValue: false,
          type: BOOLEAN,
          allowNull: false,
          comment: '是否激活',
        },
        type: {
          type: STRING(50),
          allowNull: false,
          comment: 'flowise、dify',
        },
        credit: {
          type: INTEGER,
          defaultValue: 1,
          allowNull: false,
          comment: 'credit',
        },
        created_at: {
          type: DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          comment: '创建时间',
        },
        updated_at: {
          type: DATE,
          allowNull: false,
          comment: '更新时间',
        },
        deleted_at: { type: DATE, allowNull: true, comment: '删除日期' },
        version: {
          type: INTEGER,
          defaultValue: 0,
          allowNull: false,
          comment: '更新版本',
        },
        is_deleted: {
          defaultValue: false,
          type: BOOLEAN,
          allowNull: false,
          comment: '是否删除',
        },
      },
      {
        charset: 'utf8',
      },
    );
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable(tableName);
  },
};
