"use strict";

const Hapi = require("hapi");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect(
  "mongodb://127.0.0.1:27017/hapiProject", {
    useNewUrlParser: true
  }
);
var connexionInstance = mongoose.connection;
connexionInstance.on("error", console.error.bind(console, "connection error:"));

// const config = require("config");
// const server = Hapi.server(config.get(api));

const server = Hapi.server({
  host: "localhost",
  port: 7777
});

// { "_id" : ObjectId("5b993e321c6f0735b81a3572"), "compnos" : 152038722, "naturecode" : "MVA", "incident_type_description" : "MVAcc", "main_crimecode" : "MVAcc", "reptdistrict" : "E13",
// "reportingarea" : 0, "fromdate" : "2015-05-12T06:00:00", "weapontype" : "Other", "shooting" : "False", "domestic" : "False", "shift" : "Last", "year" : 2015, "month" : 5,
// "day_week" : "Tuesday", "ucrpart" : "Other", "x" : 760592.1395, "y" : 2934324.064, "streetname" : "HYDE\n PARK AV", "xstreetname" : "WELD HILL ST", "location" : "(42.29928636, -71.11399955)" }


// Retourne les crimes commis
//server.route({
//  method: 'GET',
//  path: '/api/crimes/{nb}',
//  handler: function(request, reply) {
//    var nb = space * parseInt(request.params.nb);
//    nb = nb < 0 ? -nb : nb;
//    db.crime.find({}, {}).skip(nb).limit(space, (err, docs) => {
//      if (err) {
//        return reply(Boom.wrap(err, 'Internal MongoDB error'));
//      }
//      reply(docs);
//    });
//  }
//});
mongoose.model(
  "question",
  new Schema({}, {
    collection: "crimes"
  })
);

// get crimes
server.route({
  method: "GET",
  path: "/api/crimes/{nb}",
  handler: async function(request, reply) {
    var nb = 10 * parseInt(request.params.nb);
    if (nb < 0) nb = -nb;

    var questions = mongoose.model("question");

    var mycrime = await questions.find({}).skip(nb).limit(10);
    return mycrime;
  }
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
  }

  console.log("Server running at:", server.info.uri);
}

start();

// pour avoir la base de données mangoos
// db.once("open", function () {
//   // we're connected!
//   console.log("open");
// });