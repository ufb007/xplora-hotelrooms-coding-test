import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Room from './Room.model';

@Table({ tableName: 'images', timestamps: false })
class Image extends Model {
    @ForeignKey(() => Room)
    @Column({ type: DataType.INTEGER })
    roomId!: number;

    @Column({ type: DataType.STRING })
    src!: string;

    @BelongsTo(() => Room)
    room!: Room
}

export default Image;