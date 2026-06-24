import { Event } from "../entities/Event.js";
export declare const getAllEvents: () => Promise<Event[]>;
export declare const getEventByID: (id: number) => Promise<Event>;
export declare const searchEvent: (word: string) => Promise<Event[]>;
export declare const createEvents: (data: {
    title: string;
    summary: string;
    date: string;
    start_time: string;
    end_time: string;
}) => Promise<Event>;
export declare const updateEvents: (id: number, data: Partial<{
    title: string;
    summary: string;
    date: string;
    start_time: string;
    end_time: string;
}>) => Promise<Event>;
export declare const deleteEvent: (id: number) => Promise<boolean>;
//# sourceMappingURL=events.service.d.ts.map