import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import dotenv from "dotenv"

import typeDefs from "./schema/typeDefs.js"
import resolvers from "./schema/resolvers/index.js"

dotenv.config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
})

mongoose
.connect(process.env.MONGO_DB)
.then(() => {
  console.log('MongoDB Connected');
  return server.listen({ port: 5000 });
})
.then(({ url }) => {
  console.log(`Server running at ${url}`);
})
.catch(err => {
  console.error(err)
})