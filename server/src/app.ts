import express from 'express';
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { buildSchema } from "graphql";
import { readFileSync } from "fs";
import { Sequelize } from 'sequelize-typescript';
import User from './models/User.model';
import Hotel from './models/Hotel.model';
import Room from './models/Room.model';
import Booking from './models/Booking.model';
import UserResolver from './resolvers/User.resolver';
import HotelResolver from './resolvers/Hotel.resolver';

const schemaFile = readFileSync('./src/schema.gql', 'utf-8');
const schema = buildSchema(schemaFile);

const sequelize = new Sequelize('mysql://xplora:xplora@localhost:3306/hotelrooms');

sequelize.addModels([User, Hotel, Room, Booking]);

const resolvers = Object.assign(
    {},
    new UserResolver(),
    new HotelResolver()
);

const app = express();

app.use('/files', express.static('public'));

app.use(cors());

app.use(
    '/graphql',
    cors({ origin: ['*'] }),
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

export default app;