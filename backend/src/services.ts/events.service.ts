import { ILike } from "typeorm/browser";
import { AppDataSource } from "../data-source.js";
import { Event } from "../entities/Event.js";


const eventRepository = await AppDataSource.getRepository(Event);

export const getAllEvents = async ()=>{
    const events = await eventRepository.find();
    if(!events){
        throw new Error("No event has been created yet!")
    }
    return events
};

export const getEventByID = async (id:number)=>{
    const eventById = await eventRepository.findOne({
        where: {id}
    })
    if(!eventById){
        throw new Error("Event not found")
    }
    return eventById;
};

export const searchEvent = async (word:string)=>{
    if(!word.trim()){
        throw new Error("Invalid Search")
    }
    const getEvent = await eventRepository.find({
        where: {
            title: ILike(`%${word}%`)
        }
    });
    return getEvent
};

export const createEvents = async (data:{
     title: string;
     summary: string;
     date: string;
     start_time: string;
     end_time: string;
})=>{
    const madeEvent = eventRepository.create(data);
    return await eventRepository.save(madeEvent)
};

export const updateEvents = async (id:number, data:Partial<{
     title: string;
     summary: string;
     date: string;
     start_time: string;
     end_time: string;
}>)=>{
    const event = await eventRepository.findOne({
        where: {id}
    })
    if(!event){
        throw new Error("Event not found")
    }
    Object.assign(event, data)
    return await eventRepository.save(event)
};

export const deleteEvent = async (id:number)=>{
    const event = await eventRepository.findOne({
        where: {id}
    })
    if(!event){
        throw new Error("Event not found")
    }

     await eventRepository.remove(event)
     return true
};
