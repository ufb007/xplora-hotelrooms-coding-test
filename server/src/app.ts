import express from 'express';
import { Sequelize } from 'sequelize-typescript';
import User from './models/User.model';
import Hotel from './models/Hotel.model';
import Room from './models/Room.model';

const sequelize = new Sequelize({
    database: 'hotelrooms',
    dialect: 'mysql',
    username: 'xplora',
    password: 'xplora',
    models: [User, Hotel, Room]
});

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