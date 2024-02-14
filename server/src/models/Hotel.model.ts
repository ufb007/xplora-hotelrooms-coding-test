import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Room from './Room.model';
import Booking from './Booking.model';

@Table({ tableName: 'hotels', timestamps: false })
class Hotel extends Model {
    @Column({ type: DataType.STRING })
    name!: string;

    @Column({ type: DataType.STRING })
    location!: string;

    @HasMany(() => Room)
    rooms!: Room[];

    @HasMany(() => Booking)
    booking!: Booking[];
}

export default Hotel;