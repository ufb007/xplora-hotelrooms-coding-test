import Hotel from "src/models/Hotel.model";
import HotelService from "../services/Hotel.service";

class HotelResolver {
    constructor(protected hotelService: HotelService = new HotelService()) {}

    public hotels = async (): Promise<Hotel[]> => {
        return this.hotelService.getAllHotels();
    }

    public getHotelById = async ({ id }: { id: number }): Promise<Hotel | null> => {
        return await this.hotelService.getHotelById(id);
    }
}

export default HotelResolver;