'use strict';
// npx sequelize-cli db:seed:all
const tableName = 'system-configs';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          scope: 'frontEnd',
          key: 'slogans',
          desc: 'slogans',
          format: 'array',
          array_value: JSON.stringify([
            '生成独一无二的拜年短信 💌 🎉',
            '告别千篇一律的群发短信。🌟🌸',
            '让朋友们感受到真诚和特别的关怀。🎈🎈',
            '开始创建您的拜年祝福吧！🎁',
            '展示一下有趣的灵魂是什么样的！🎊🎊',
          ]),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          scope: 'frontEnd',
          key: 'enableChats',
          desc: 'enableChats',
          format: 'array',
          array_value: JSON.stringify([2]),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          scope: 'common',
          key: 'mainChatId',
          desc: 'mainChatId',
          format: 'int',
          int_value: 1,
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
