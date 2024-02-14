import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
import Hotel from './Hotel.model';
import Room from './Room.model';

@Table({ tableName: 'bookings' })
class Booking extends Model {
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