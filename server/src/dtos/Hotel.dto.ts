import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDateString } from 'class-validator'

export interface CreateBookingInterface {
    userId: number;
    hotelId: number;
    roomId: number;
    startDate: Date;
    endDate: Date;
}

export class CreateBookingDTO {
    @IsNotEmpty()
    @IsNumber()
    userId!: number;

    @IsNotEmpty()
    @IsNumber()
    hotelId!: number;

    @IsNotEmpty()
    @IsNumber()
    roomId!: number;

    @IsNotEmpty()
    @IsDateString()
    startDate!: Date;

    @IsNotEmpty()
    @IsDateString()
    endDate!: Date;
}