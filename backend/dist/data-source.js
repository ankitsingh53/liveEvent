import { DataSource } from 'typeorm';
import { Event } from './entities/Event.js';
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "@nkit123",
    database: "liveevents",
    synchronize: true,
    // logging: true,
    entities: [Event],
});
//# sourceMappingURL=data-source.js.map