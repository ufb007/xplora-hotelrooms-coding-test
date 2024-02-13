import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Hotel from './Hotel.model';

@Table({ tableName: 'rooms', timestamps: false })
class Room extends Model {
    @ForeignKey(() => Hotel)
    @Column({ type: DataType.INTEGER })
    hotelId!: number;
}

export default Room;