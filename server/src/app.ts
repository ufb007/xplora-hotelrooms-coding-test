import express from 'express';
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { buildSchema } from "graphql";
import { readFileSync } from "fs";
import { Sequelize } from 'sequelize-typescript';
import User from './models/User.model';
import Hotel from './models/Hotel.model';
import Room from './models/Room.model';
import Image from './models/Image.model';
import Booking from './models/Booking.model';
const env = process.env.NODE_ENV || 'development';
import * as config from '../config/config.json';

const schemaFile = readFileSync('./src/schema.gql', 'utf-8');
const schema = buildSchema(schemaFile);

const sequelize = new Sequelize('mysql://xplora:xplora@localhost:3306/hotelrooms');

sequelize.addModels([User, Hotel, Room, Image, Booking]);

const app = express();

app.use(cors());

app.get('/', function(req, res) {
    const user = User.findAll();

    user.then(data => {
        data.map(({ email, firstName, lastName }: User) => {
            console.log(`${firstName} ${lastName}`)
        })
    })

    res.json({success: true});
});

app.use(
    '/graphql',
    cors({ origin: ['*'] }),
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

export default app;