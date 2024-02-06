'use strict';
// npx sequelize-cli db:seed:all
const tableName = 'users';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          openid: 'openid-1',
          unionid: 'unionid-1',
          session: 'session-01',
          token: 'token-001',
          credit: 1000,
          roles: JSON.stringify(['authenticated', 'user', 'super-admin']),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete(tableName, {}, {});
  },
};
