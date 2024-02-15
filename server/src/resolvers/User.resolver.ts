import User from "../models/User.model";
import UserService from "../services/User.service";
import { InputValidation } from "../libs/input-validation";
import { UserDTO, CreateUseDTO } from "../dtos/User.dto";
import { Sequelize } from "sequelize-typescript";

class UserResolver {
    constructor(protected userService: UserService = new UserService()) {}

    public users = async (): Promise<User[]> => {
        return await this.userService.getAllUsers();
    }

    public getUserByEmail = async ({ email }: { email: string }): Promise<User | null> => {
        try {
            const error = await InputValidation(UserDTO, {email});

            if (error) {
                throw new Error(error);
            }

            return await this.userService.getUserByEmail(email);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public createUser = async (args: User): Promise<User> => {
        try {
            const error = await InputValidation(CreateUseDTO, args);

            if (error) {
                throw new Error(error)
            }

            return await this.userService.createUser(args);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

export default UserResolver;