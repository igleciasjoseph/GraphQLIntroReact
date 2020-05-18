const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross origin requests
app.use(cors());

// Include your own connection string from M Lab Cluster
// useUnifiedTopolgy, useNewUrlParse were passed in as option since they were deprecated
mongoose.connect("", { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Now listening on port 4000");
});
