const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });
app.get('/health', (req, res) => {
  res.json({msg: "Server up"});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});