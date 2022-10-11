const mongoose = require("mongoose");
// const { PORT, mongoUri } = require('../config/config')
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const TodoListRoutes = require("./routes/api/todoList");
const path = require("path");

const express = require("express");
const app = express();

const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/mydb";

app.use(cors()); // to allow cross origin requests
app.use(bodyParser.json()); // to convert the request into JSON

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));

app.use("/api/todoList", TodoListRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
