import { getAllEvents } from "../services.ts/events.service.js";
import { getEventByID } from "../services.ts/events.service.js";
import { createEvents } from '../services.ts/events.service.js';
import { updateEvents } from '../services.ts/events.service.js';
import { deleteEvent } from '../services.ts/events.service.js';
import { searchEvent } from '../services.ts/events.service.js';
export const resolvers = {
    Query: {
        getEvents: async () => {
            return await getAllEvents();
        },
        getEvent: async (parent, args) => {
            const id = args.id;
            return getEventByID(id);
        },
        search: async (parent, args) => {
            const target = args.word;
            return await searchEvent(target);
        }
    },
    Mutation: {
        createEvent: (parent, args) => {
            const data = args.input;
            return createEvents(data);
        },
        updateEvent: async (parent, args) => {
            const { id, ...data } = args.input;
            return await updateEvents(id, data);
        },
        deleteEvent: async (parent, args) => {
            const id = args.id;
            return await deleteEvent(id);
        }
    }
};
//# sourceMappingURL=resolvers.js.map