'use strict';

const tableName = 'command-code-log';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, BOOLEAN, INTEGER, DATE } = Sequelize;

    await queryInterface.createTable(
      tableName,
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'id',
        },
        code: {
          type: STRING(20),
          allowNull: false,
          comment: '兑换码',
        },
        user_id: {
          type: INTEGER,
          allowNull: false,
          comment: '使用者',
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
    await queryInterface.addIndex(tableName, ['code', 'user_id'], {
      unique: true,
      name: `idx_code_user_id`,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable(tableName);
  },
};
