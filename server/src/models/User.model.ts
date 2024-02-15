import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Booking from './Booking.model';

@Table({ 
    tableName: 'users',
    timestamps: true
})
class User extends Model {
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email!: string;

    @Column({ type: DataType.STRING })
    firstName!: string;

    @Column({ type: DataType.STRING })
    lastName?: string;

    @HasMany(() => Booking)
    bookings!: Booking[]
}

export default User;