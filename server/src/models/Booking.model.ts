import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
import Hotel from './Hotel.model';
import Room from './Room.model';
import User from './User.model';

@Table({ 
    tableName: 'bookings',
    timestamps: true
})
class Booking extends Model {
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId!: number;

    @ForeignKey(() => Hotel)
    @Column({ type: DataType.INTEGER })
    hotelId!: number;

    @ForeignKey(() => Room)
    @Column({ type: DataType.INTEGER })
    roomId!: number;

    @Column({ type: DataType.DATE })
    startDate!: Date;

    @Column({ type: DataType.DATE })
    endDate!: Date;
}

export default Booking;