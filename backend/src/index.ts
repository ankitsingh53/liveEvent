import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { AppDataSource } from './data-source.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
    const app = express();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();
    app.use(
      '/graphql',
      cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'apollo-require-preflight', 'x-apollo-operation-name'],
        optionsSuccessStatus: 200,
        methods: ["GET", "POST", "PUT", "DELETE"]
      }),
      express.json(),
      expressMiddleware(server)
    );

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Server Error:', error);
  }
};

startServer();