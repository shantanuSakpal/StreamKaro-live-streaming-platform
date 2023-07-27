import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "*",
  },
}); //create new sever instance

//what should happen when a client connects
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (message) => {
    //send message to all clients
    socket.broadcast.emit("message", message);
  });
});

server.listen(3005, () => {
  console.log("listening on *:3005");
});
