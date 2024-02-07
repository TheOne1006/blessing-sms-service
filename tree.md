blessing-sms-service
├─.editorconfig
├─.env
├─.env.template
├─.prettierrc
├─.sequelizerc
├─README.md
├─todo.md
├─tree.md
├─yarn.lock
├─test
|  ├─helper.ts
|  └init-test-db.ts
├─src
|  ├─app.controller.ts
|  ├─main.ts
|  ├─user
|  |  ├─user.controller.ts
|  |  ├─dtos
|  |  |  └index.ts
|  ├─system-configs
|  |       ├─system-configs.controller.ts
|  |       ├─dtos
|  |       |  └index.ts
|  ├─suggent
|  |    └suggent.controller.ts
|  ├─i18n
|  |  ├─zh-cn
|  |  ├─en
|  ├─core
|  |  ├─logger
|  |  |   └index.ts
|  |  ├─interceptors
|  |  |      ├─index.ts
|  |  |      ├─__tests__
|  |  ├─i18n
|  |  |  └index.ts
|  |  ├─filters
|  |  |    ├─base-exception.interface.ts
|  |  |    ├─index.ts
|  |  |    ├─__tests__
|  |  ├─database
|  |  |    └index.ts
|  ├─common
|  |   ├─interfaces
|  |   |     ├─index.ts
|  |   |     └request-user.interface.ts
|  |   ├─interceptors
|  |   |      ├─__tests__
|  |   ├─decorators
|  |   |     ├─index.ts
|  |   |     ├─__tests__
|  |   |     |     ├─__mocks__
|  |   |     |     |     └file1
|  |   ├─constants
|  |   |     └index.ts
|  |   ├─auth
|  |   |  ├─auth.middleware.ts
|  |   |  ├─index.ts
|  |   |  └roles.guard.ts
|  ├─command-code
|  |      ├─services
|  |      |    └index.ts
|  |      ├─entites
|  |      |    └index.ts
|  |      ├─dtos
|  |      |  └index.ts
|  |      ├─controllers
|  |      |      └command-code.controller.ts
|  ├─chats
|  |   ├─chat.controller.ts
|  |   ├─dtos
|  |   |  └index.ts
├─docs
|  ├─about_test.md
|  ├─architecture_zh.md
|  └development_zh.md
├─databases
|     ├─seeders
|     ├─migrations
|     ├─db
├─config
|   ├─config.default.ts
|   ├─config.development.ts
|   ├─config.production.ts
|   ├─config.test.ts
|   └index.ts
├─.vscode
