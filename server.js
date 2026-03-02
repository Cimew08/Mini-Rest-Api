const express = require("express"); //express
const dotenv = require("dotenv"); //dotenv
const routers = require("./routers/index"); //routers - index
const connectDatabase = require("./helper/database/connectDatabase"); //DB-Connection
const errorHandler = require("./middlewares/error/ErrorHandler"); //ErrorHandler

dotenv.config({
  path: "./config/env/config.env",
});
//process.env
const PORT = process.env.PORT;
const Author = process.env.Author;

//app - express
const app = express();
// Parse incoming JSON requests
app.use(express.json());
//Routers
app.use(routers);
//MongoDB - Connection
connectDatabase();
//Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Running ${PORT} Author = ${Author}`);
});
