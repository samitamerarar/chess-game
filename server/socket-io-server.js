var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
const port = process.env.PORT || 3000;

var roomNumber = 0;

io.on("connection", function (socket) {
  socket.on("join-game", function (data) {
    socket.join("room-" + roomNumber);
    var sockets = io.nsps["/"].adapter.rooms["room-" + roomNumber];
    if (sockets && sockets.length === 1) {
      // assign white to first connected player
      io.sockets
        .to(socket.id)
        .emit("white-player-init", "You are in room number " + roomNumber);
    } else if (sockets && sockets.length === 2) {
      // 2 players connected, start the game
      io.sockets.in("room-" + roomNumber).emit("start-game", "start");
    }
    // 2 players per room limit
    if (sockets && sockets.length > 1) {
      // next player will join another room
      roomNumber++;
    }
  });

  // emit only to the clients (all) inside the room who sended the data
  socket.on("move", function (data) {
    var keys = Object.keys(socket.rooms);
    for (var i = 0; i < keys.length; i++) {
      io.to(socket.rooms[keys[i]]).emit("update-board", data);
    }
  });

  // handle disconnect from users
  socket.on("disconnecting", function () {
    var keys = Object.keys(socket.rooms);
    for (var i = 0; i < keys.length; i++) {
      io.to(socket.rooms[keys[i]]).emit("quit-game");
    }
  });
  socket.on("quit-game", function (data) {
    var keys = Object.keys(socket.rooms);
    for (var i = 0; i < keys.length; i++) {
      io.to(socket.rooms[keys[i]]).emit("quit-game");
    }
  });
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
