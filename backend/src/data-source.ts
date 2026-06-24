import {DataSource} from 'typeorm';
import { Event } from './entities/Event.js';
import dotenv from 'dotenv';
dotenv.config()

export const AppDataSource = new DataSource({
     type: "postgres",
     url: process.env.DATABASE_URL!,
     ssl: {
        rejectUnauthorized: true,
    },
     synchronize: true,
     entities: [Event],
}); 