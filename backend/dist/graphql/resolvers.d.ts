interface EventData {
    title: string;
    summary: string;
    date: string;
    start_time: string;
    end_time: string;
}
export declare const resolvers: {
    Query: {
        getEvents: () => Promise<import("../entities/Event.js").Event[]>;
        getEvent: (parent: any, args: {
            id: number;
        }) => Promise<import("../entities/Event.js").Event>;
        search: (parent: any, args: {
            word: string;
        }) => Promise<import("../entities/Event.js").Event[]>;
    };
    Mutation: {
        createEvent: (parent: any, args: {
            input: EventData;
        }) => Promise<import("../entities/Event.js").Event>;
        updateEvent: (parent: any, args: {
            input: {
                id: number;
                title?: string;
                summary?: string;
                date?: string;
                start_time?: string;
                end_time?: string;
            };
        }) => Promise<import("../entities/Event.js").Event>;
        deleteEvent: (parent: any, args: {
            id: number;
        }) => Promise<boolean>;
    };
};
export {};
//# sourceMappingURL=resolvers.d.ts.map