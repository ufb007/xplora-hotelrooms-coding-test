import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import Hotel from './Hotel.model';
import Booking from './Booking.model';

@Table({ tableName: 'rooms', timestamps: false })
class Room extends Model {
    @ForeignKey(() => Hotel)
    @Column({ type: DataType.INTEGER })
    hotelId!: number;

    @Column({ type: DataType.STRING })
    title!: string;

    @Column({ type: DataType.STRING })
    image!: string;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    singleBed!: number;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    doubleBed!: number;

    @Column({ type: DataType.ENUM, values: ['0','1'], defaultValue: '0' })
    wifi!: number;

    @Column({ type: DataType.ENUM, values: ['0','1'], defaultValue: '0' })
    tv!: number;
    
    @BelongsTo(() => Hotel)
    hotel!: Hotel;

    @HasMany(() => Booking)
    bookings!: Booking[];
}

export default Room;