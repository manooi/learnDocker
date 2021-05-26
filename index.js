const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config');

mongoose.
  connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
  .then(() => {
    console.log("Succesfully connected to DB");
  })
  .catch((e) => console.log(e));

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi There</h1>")
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
