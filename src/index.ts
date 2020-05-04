import HTTP from "http";
import express from "express";
import fs from "fs";

import nes from "./emulators/nes";

const App = express();
const SERVER = HTTP.createServer(App);
const PORT = 3333;
const IO = require("socket.io")(SERVER);

App.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

IO.on("connect", (socket: any) => {
  const romData = fs.readFileSync(
    __dirname + "/roms/nes/All Night Nippon Super Mario Bros [p1].nes",
    { encoding: "binary" }
  );

  console.log(socket.id);

  socket.on("joystick", (msg: { command: string; event: string }) => {
    console.log({ msg });
  });

  socket.emit("game", { data: "somedata" });
});

SERVER.listen(PORT, () => {
  `app listening on ${PORT}`;
});
