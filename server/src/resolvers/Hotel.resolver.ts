import Hotel from "src/models/Hotel.model";
import HotelService from "../services/Hotel.service";
import { CreateBookingInterface, CreateBookingDTO, GetHotelBookingsDTO } from "../dtos/Hotel.dto";
import { InputValidation } from "../libs/input-validation";
import Booking from "../models/Booking.model";

class HotelResolver {
    constructor(
        protected hotelService: HotelService = new HotelService()
    ) {}

    public hotels = async (): Promise<Hotel[]> => {
        return this.hotelService.getAllHotels();
    }

    public getHotelById = async (args: GetHotelBookingsDTO): Promise<Hotel | null> => {
        try {
            const error = await InputValidation(GetHotelBookingsDTO, args);

            if (error) {
                throw new Error(error);
            }

            const { startDate, endDate } = args;

            if (startDate && endDate) {
                const sDate = new Date(startDate);
                const eDate = new Date(endDate);

                if (sDate > eDate) {
                    throw new Error("End date needs to be before start date");
                }
            }

            return await this.hotelService.getHotelById(args);
        } catch (error: any) {
            throw new Error(error.message);
        }
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