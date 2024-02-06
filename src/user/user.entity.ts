import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  version: true,
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  openid: string;

  @Column({ type: DataType.STRING, allowNull: false })
  unionid: string;

  @Column({ type: DataType.STRING, allowNull: false })
  session: string;

  @Column(DataType.STRING)
  token: string;

  @Column(DataType.INTEGER)
  credit: number;

  @Column(DataType.JSON)
  roles: string[];

  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt: Date;

  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt: Date;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  version: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false, field: 'is_deleted' })
  isDeleted: boolean;
}
