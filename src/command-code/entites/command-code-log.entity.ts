import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'command-code-log',
  version: true,
})
export class CommandCodeLog extends Model<CommandCodeLog> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  code: string;

  @Column({ type: DataType.INTEGER, allowNull: false, field: 'user_id' })
  userId: number;

  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt: Date;

  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt: Date;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  version: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false, field: 'is_deleted' })
  isDeleted: boolean;
}
