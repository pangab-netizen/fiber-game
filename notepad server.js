const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let players = 0;

io.on("connection", (socket) => {

    players++;

    console.log("Player masuk");

    io.emit("players", players);

    socket.on("disconnect", () => {

        players--;

        io.emit("players", players);

    });

});

server.listen(3000, () => {

    console.log("Server jalan di port 3000");

});