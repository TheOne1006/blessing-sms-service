'use strict';

const tableName = 'suggest';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { BOOLEAN, TEXT, INTEGER, DATE } = Sequelize;

    await queryInterface.createTable(
      tableName,
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'id',
        },
        suggest: {
          type: TEXT,
          allowNull: false,
          comment: '内容信息',
        },
        user_id: {
          type: INTEGER,
          allowNull: false,
          comment: '用户 id',
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
