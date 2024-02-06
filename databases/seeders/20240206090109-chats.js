'use strict';
// npx sequelize-cli db:seed:all
const tableName = 'chats';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          title: '2024拜年短信',
          welcome:
            '发送名字 或者 具体要求例如 \n 以 “张长在” 春节快乐，生成五言绝句',
          icon_url: 'https://docs.nestjs.com/assets/logo-small.svg',
          api_url:
            'https://flowise.theone.io/api/v1/prediction/2bf09509-f1cb-4490-b810-7deccf1c5172',
          api_key: 'ZwNITByuPDzb6Km40eyIro0F0N4Nghs0OUG+JOfEKkE=',
          enabled: true,
          type: 'flowise',
          credit: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: '2024拜年短信',
          api_url:
            'https://flowise.theone.io/api/v1/prediction/2bf09509-f1cb-4490-b810-7deccf1c5172',
          api_key: 'ZwNITByuPDzb6Km40eyIro0F0N4Nghs0OUG+JOfEKkE=',
          icon_url: 'https://docs.nestjs.com/assets/logo-small.svg',
          welcome:
            '发送名字 或者 具体要求例如 \n 以 “张长在” 春节快乐，生成五言绝句2',
          enabled: true,
          type: 'flowise',
          credit: 15,
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
