const express = require('express');
const mongoose = require('mongoose');

mongoose.
  connect('mongodb://root:example@mongo:27017/?authSource=admin')
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
