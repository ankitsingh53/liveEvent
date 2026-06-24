import 'reflect-metadata'
import { AppDataSource } from './data-source.js'
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/typeDefs.js';
import {resolvers} from './graphql/resolvers.js'

const startServer = async ()=>{
    try {
        await AppDataSource.initialize();
    console.log("Database is connected successfully")
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 3000,
        }
    })
    console.log(`Server is running at ${url}`)
    } catch (error) {
        console.log("Server error", error)
    }
}
startServer()