import { getAllEvents } from "../services.ts/events.service.js";
import { getEventByID } from "../services.ts/events.service.js";
import {createEvents } from '../services.ts/events.service.js';
import {updateEvents} from '../services.ts/events.service.js';
import {deleteEvent} from '../services.ts/events.service.js';
import {searchEvent} from '../services.ts/events.service.js';

interface EventData {
     title: string;
     summary: string;
     date: string;
     start_time: string;
     end_time: string;
}
export const resolvers = {
     Query: {
        getEvents: async ()=>{
            return await getAllEvents()
        },
        getEvent: async (parent:any, args:{id:number})=>{
            const id = args.id;
            return getEventByID(id);
        },
        search: async(parent:any, args:{word:string})=>{
            const target = args.word;
            return await searchEvent(target)
        }
     },
     Mutation: {
        createEvent: (parent:any, args:{input:EventData})=>{
            const data = args.input;
            return createEvents(data)
        },
        updateEvent: async (parent:any, args:{input:{
            id: number;
            title?: string;
            summary?: string;
            date?: string;
            start_time?: string;
            end_time?: string;
        }})=>{
            const {id, ...data} = args.input;
            return await updateEvents(id, data)
        },
        deleteEvent: async (parent:any, args: {id:number})=>{
            const id = args.id;
            return await deleteEvent(id)
        }
     }
};