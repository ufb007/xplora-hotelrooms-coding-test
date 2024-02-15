import Room from "../models/Room.model";
import Hotel from "../models/Hotel.model";
import Image from "../models/Image.model";
import Booking from "../models/Booking.model";
import { CreateBookingInterface } from "../dtos/Hotel.dto";
import { Op } from 'sequelize';

class HotelService {
    public getAllHotels(): Promise<Hotel[]> {
        return Hotel.findAll({
            include: {
                model: Room,
                include: [
                    {model: Image},
                    {model: Booking}
                ]
            }
        });
    }

    public async getHotelById(id: number): Promise<Hotel | null> {
        const hotel = await Hotel.findByPk(id, {
            include: {
                model: Room,
                include: [
                    {model: Image},
                    {
                        model: Booking,
                        where: {
                            endDate: { [Op.gt]: new Date() }
                        }
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