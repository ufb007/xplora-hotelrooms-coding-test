import User from "../models/User.model";
import UserService from "../services/User.service";

class UserResolver {
    constructor(protected userService: UserService = new UserService()) {}

    public users = async (): Promise<User[]> => {
        return await this.userService.getAllUsers();
    }

    public getUserByEmail = async ({ email }: { email: string }): Promise<User | null> => {
        return await this.userService.getUserByEmail(email);
    }
}

export default UserResolver;