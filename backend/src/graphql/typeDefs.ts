export const typeDefs =`#graphql
   
   type Events{
     id: ID!
     title: String!
     summary: String!
     date: String!
     start_time: String!
     end_time: String!
   }

   type Query{
     getEvents: [Events!]!
     getEvent(id: ID!): Events
     search(word: String!): [Events!]!
   }

   input CreateEvent {
     title: String!
     summary: String!
     date: String!
     start_time: String!
     end_time: String!
   }

   input UpdateEvent{
     id: Int!
     title: String
     summary: String
     date: String
     start_time: String
     end_time: String
   }

   type Mutation{
     createEvent(input: CreateEvent!): Events!
     updateEvent(input: UpdateEvent!): Events!
     deleteEvent(id: ID!): Boolean!
   }

`