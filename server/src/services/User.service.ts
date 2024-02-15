import Booking from "../models/Booking.model";
import User from "../models/User.model";

class UserService {
    public async getAllUsers(): Promise<User[]> {
        const users = await User.findAll();

        return users;
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        try {
            return await User.findOne({
                where: {
                    email
                },
                include: {
                    model: Booking
                }
            });
        } catch (error) {
            throw error;
        }
    }

    public async createUser(args: User): Promise<User> {
        try {
            const { email, firstName, lastName } = args;

            return await User.create({ email, firstName, lastName });
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;