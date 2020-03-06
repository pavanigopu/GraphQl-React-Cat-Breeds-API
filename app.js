const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const mongoose = require("mongoose");

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolver = require("./graphql/resolvers/index");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use("/graphql", graphQLHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolver,
  graphiql: true
}));

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-jf1qf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
).then(() => {
  app.listen(5000);
}).catch(err => {
  console.error(err);
});