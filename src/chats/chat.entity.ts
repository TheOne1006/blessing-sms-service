import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'chats',
  version: true,
})
export class Chat extends Model<Chat> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: true })
  welcome: string;

  @Column({ type: DataType.STRING, allowNull: true, field: 'btn_text' })
  btnText: string;

  @Column({ type: DataType.STRING, allowNull: true })
  desc: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'icon_url' })
  iconUrl: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'api_url' })
  apiUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'suggestion_api_url',
  })
  suggestionApiUrl: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'api_key' })
  apiKey: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  enabled: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'suggestion_enabled',
    defaultValue: false,
  })
  suggestionEnabled: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'replay_enabled',
    defaultValue: false,
  })
  replayEnabled: boolean;

  @Column({
    type: DataType.JSON,
    field: 'start_suggestions',
    defaultValue: [],
  })
  startSuggestions: any;

  @Column({
    type: DataType.INTEGER,
    field: 'scheduled_ms',
    defaultValue: 10000,
  })
  scheduledMs: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  credit: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt: Date;

  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt: Date;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  version: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false, field: 'is_deleted' })
  isDeleted: boolean;
}
