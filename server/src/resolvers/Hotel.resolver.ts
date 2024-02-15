import Hotel from "src/models/Hotel.model";
import HotelService from "../services/Hotel.service";
import { CreateBookingInterface, CreateBookingDTO } from "../dtos/Hotel.dto";
import { InputValidation } from "../libs/input-validation";
import Booking from "../models/Booking.model";

class HotelResolver {
    constructor(
        protected hotelService: HotelService = new HotelService()
    ) {}

    public hotels = async (): Promise<Hotel[]> => {
        return this.hotelService.getAllHotels();
    }

    public getHotelById = async ({ id }: { id: number }): Promise<Hotel | null> => {
        return await this.hotelService.getHotelById(id);
    }
    
    public createBooking = async (args: CreateBookingInterface): Promise<Booking> => {
        try {
            const error = await InputValidation(CreateBookingDTO, args);

            if (error) {
                throw new Error(error);
            }

            return await this.hotelService.createBooking(args);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default HotelResolver;