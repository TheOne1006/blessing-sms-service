'use strict';
// npx sequelize-cli db:seed:all
const tableName = 'command-code';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          code: '2024新春快乐',
          credit: 20,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          code: '2024',
          credit: 20,
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
