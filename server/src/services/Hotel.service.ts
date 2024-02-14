import Room from "../models/Room.model";
import Hotel from "../models/Hotel.model";
import Image from "../models/Image.model";
import Booking from "../models/Booking.model";

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
        return await Hotel.findByPk(id, {
            include: {
                model: Room,
                include: [
                    {model: Image},
                    {model: Booking}
                ]
            }
        });
    }
}

export default HotelService;