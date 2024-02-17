require("dotenv").config();




const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE);

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

const app = require("./app");
const server = app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

const io = require("socket.io")(server, {
  allowEIO3: true,
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const jwt = require("jwt-then");

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, process.env.SECRET);

    socket.userId = payload.id;
    next();
  } catch (error) {}
});

io.on("connection", (socket) => {
  console.log("connected:" + socket.userId);

  socket.on("disconnect", () => {
    console.log("disconnect:" + socket.userId);
  });
});


