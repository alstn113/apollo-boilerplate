import "./config";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import connect from "./models/index";

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });
  const corsOptions = {
    origin: "http://localhost:8080",
    credentials: true,
  };
  await server.start();
  server.applyMiddleware({ app });
  connect();

  app.set("port", process.env.PORT || 3000);

  app.use(cors(corsOptions));
  app.use(cookieParser(process.env.COOKIE_SECRET));

  app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기중");
  });
}
startServer();
