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
        btn_text: {
          type: STRING(150),
          allowNull: true,
          comment: 'button 文案',
        },
        // ALTER TABLE `chats` ADD `btn_text` VARCHAR(150) NULL DEFAULT NULL COMMENT 'button 文案' AFTER `title`;
        desc: {
          type: STRING(250),
          allowNull: true,
          comment: '描述',
        },
        // ALTER TABLE `chats` ADD `desc` VARCHAR(250) NULL DEFAULT NULL COMMENT 'button 描述' AFTER `btn_text`;
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
        // ALTER TABLE `chats` ADD `suggestion_api_url` VARCHAR(150) NULL DEFAULT NULL COMMENT 'suggestion api url' AFTER `api_url`;
        suggestion_api_url: {
          type: STRING(150),
          allowNull: true,
          comment: 'suggestion api url',
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
        // ALTER TABLE `chats` ADD `suggestion_enabled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否 允许 suggestion' AFTER `enabled`;
        suggestion_enabled: {
          defaultValue: false,
          type: BOOLEAN,
          allowNull: false,
          comment: '是否 允许 suggestion',
        },
        // ALTER TABLE `chats` ADD `replay_enabled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否 允许 replay' AFTER `suggestion_enabled`;
        replay_enabled: {
          defaultValue: false,
          type: BOOLEAN,
          allowNull: false,
          comment: '是否 允许 replay',
        },
        // ALTER TABLE `chats` ADD `start_suggestions` json DEFAULT NULL COMMENT '对话初始 推荐' AFTER `replay_enabled`;
        start_suggestions: {
          type: Sequelize.JSON,
          defaultValue: '[]',
          allowNull: true,
          comment: '对话初始 推荐',
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
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable(tableName);
  },
};
