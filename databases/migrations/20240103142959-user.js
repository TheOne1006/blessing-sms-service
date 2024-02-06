'use strict';

const tableName = 'users';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, BOOLEAN, INTEGER, DATE, JSON } = Sequelize;

    await queryInterface.createTable(
      tableName,
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          comment: 'id',
        },
        openid: { type: STRING(50), allowNull: false, comment: 'openid' },
        unionid: { type: STRING(50), allowNull: false, comment: 'unionid' },
        session: { type: STRING(50), allowNull: false, comment: 'session' },
        token: { type: STRING(50), allowNull: false, comment: 'token' },
        credit: { type: INTEGER },
        roles: {
          type: JSON,
          defaultValue: [],
          comment: '角色',
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

    await queryInterface.addIndex(tableName, ['unionid'], {
      unique: true,
      name: `idx_unionid`,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable(tableName);
  },
};
