import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

//Validate function of an DTO input type using decorators
export const InputValidation = async <T extends object>(
    dtoClass: new () => T,
    data: object
) => {
    try {
        const inputDto = plainToClass(dtoClass, data);

        const errors = await validate(inputDto);

        const jsonErrors: any[] = [];

        if (errors.length > 0) {
            errors.forEach((error: any)  => {
                jsonErrors.push(error.constraints);
            });

            throw Error(JSON.stringify(jsonErrors));
        }

        return null;
    } catch (error: any) {
        return error.message;
    }
};