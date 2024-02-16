import Room from "../models/Room.model";
import Hotel from "../models/Hotel.model";
import Booking from "../models/Booking.model";
import { CreateBookingInterface, GetHotelBookingsDTO } from "../dtos/Hotel.dto";
import { Op } from 'sequelize';

class HotelService {
    public getAllHotels(): Promise<Hotel[]> {
        return Hotel.findAll({
            include: {
                model: Room,
                include: [
                    {model: Booking}
                ]
            }
        });
    }

    public async getHotelById(args: GetHotelBookingsDTO): Promise<Hotel | null> {
        const { id, startDate, endDate } = args;
        const excludedRoomIds: number[] = [];

        if (startDate && endDate) {
            const where = {
                hotelId: id,
                startDate: { [Op.lte]: new Date(startDate) },
                endDate: { [Op.gte]: new Date(endDate) }
            }

            const bookings = await Booking.findAll({ where });

            bookings.forEach(booking => {
                excludedRoomIds.push(booking.roomId)
            });
        }

        const hotel = await Hotel.findByPk(id, {
            include: {
                model: Room,
                where: {
                    id: {
                        [Op.notIn]: excludedRoomIds
                    }
                },
                include: [
                    {
                        model: Booking,
                        where: { endDate: { [Op.gt]: new Date() } },
                        required: false
                    }
                ]
            }
        });

        return hotel;
    }

    public async createBooking(args: CreateBookingInterface): Promise<Booking> {
        const { userId, hotelId, roomId, startDate, endDate } = args;

        return await Booking.create({ userId, hotelId, roomId, startDate, endDate });
    }
}

export default HotelService;