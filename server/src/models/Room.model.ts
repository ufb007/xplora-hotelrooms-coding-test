import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import Hotel from './Hotel.model';
import Image from './Image.model';
import Booking from './Booking.model';

@Table({ tableName: 'rooms', timestamps: false })
class Room extends Model {
    @ForeignKey(() => Hotel)
    @Column({ type: DataType.INTEGER })
    hotelId!: number;

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

    @HasMany(() => Image)
    images!: Image[];

    @HasMany(() => Booking)
    booking!: Booking[];
}

export default Room;