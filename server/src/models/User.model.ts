import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
class User extends Model {
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email!: string;

    @Column({ type: DataType.STRING })
    firstName!: string;

    @Column({ type: DataType.STRING })
    lastName?: string;
}

export default User;