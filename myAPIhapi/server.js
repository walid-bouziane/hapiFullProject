"use strict";

const Hapi = require("hapi");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

const server = Hapi.server({
  host: "localhost",
  port: 8000
});

server.route({
  method: "GET",
  path: "/hello",
  handler: function(request, h) {
    return "hello world";
  }
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();
