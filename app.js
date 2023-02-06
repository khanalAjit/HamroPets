require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./database/connect.js");

app.use(express.json());

//routers
const authRouter = require("./routes/auth.js");

app.use("/api", authRouter);

//establishing a port
const port = process.env.PORT || 5000;

//creating a function to start the connection
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server started. Listening on port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
