import Booking from "../models/Booking.model";
import User from "../models/User.model";

class UserService {
    public async getAllUsers(): Promise<User[]> {
        const users = await User.findAll();

        return users;
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({
            where: {
                email
            },
            include: {
                model: Booking
            }
        });
    }
}

export default UserService;