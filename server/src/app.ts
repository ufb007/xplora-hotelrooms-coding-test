import express from 'express';
import { Sequelize } from 'sequelize-typescript';
import User from './models/User.model';
import Hotel from './models/Hotel.model';
import Room from './models/Room.model';
import Image from './models/Image.model';
import Booking from './models/Booking.model';

const sequelize = new Sequelize('mysql://xplora:xplora@localhost:3306/hotelrooms');

sequelize.addModels([User, Hotel, Room, Image, Booking]);

async function initializeDatabase(): Promise<void> {
    try {
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.log(error)
    }
}

initializeDatabase();

const app = express();

app.get('/', function(req, res) {
    res.json({success: true});
});

export default app;