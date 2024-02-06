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

  @Column({ type: DataType.STRING, allowNull: false, field: 'api_url' })
  apiUrl: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'api_key' })
  apiKey: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  enabled: boolean;

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
