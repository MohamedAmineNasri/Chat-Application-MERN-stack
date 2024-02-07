const express = require("express");

const app = express();
var cors = require('cors')


//Setup Cors Origin
app.use(cors()) 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Bring in the models
require("./Models/Chatroom");
require("./Models/Message");
require("./Models/User");

//Bring in the routes
app.use("/user", require("./Routes/user"));
app.use("/chatroom", require("./Routes/chatroom"));



//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
