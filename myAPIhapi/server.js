"use strict";

const Hapi = require("hapi");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect(
  "mongodb://localhost:27017/hapiProject",
  {
    useNewUrlParser: true
  }
);
var connexionInstance = mongoose.connection;
connexionInstance.on("error", console.error.bind(console, "connection error:"));

// const config = require("config");
// const server = Hapi.server(config.get(api));

const server = Hapi.server({
  host: "localhost",
  port: 8000
});

// { "_id" : ObjectId("5b993e321c6f0735b81a3572"), "compnos" : 152038722, "naturecode" : "MVA", "incident_type_description" : "MVAcc", "main_crimecode" : "MVAcc", "reptdistrict" : "E13",
// "reportingarea" : 0, "fromdate" : "2015-05-12T06:00:00", "weapontype" : "Other", "shooting" : "False", "domestic" : "False", "shift" : "Last", "year" : 2015, "month" : 5,
// "day_week" : "Tuesday", "ucrpart" : "Other", "x" : 760592.1395, "y" : 2934324.064, "streetname" : "HYDE\n PARK AV", "xstreetname" : "WELD HILL ST", "location" : "(42.29928636, -71.11399955)" }
var MyModel = mongoose.model(
  "crime",
  new Schema({
    _id: String,
    compnos: String,
    naturecode: String,
    MVA: String,
    incident_type_description: String,
    main_crimecode: String,
    reptdistrict: String,
    reportingarea: String,
    main_crimecode: String,
    fromdate: Date,
    weapontype: String,
    shooting: Boolean,
    domestic: Boolean,
    shift: String,
    year: Number,
    month: Number,
    day_week: String,
    ucrpart: String,
    x: Number,
    y: Number,
    streetname: String,
    xstreetname: String,
    location: String
  })
);
// var MyModel2 = mongoose.model(
//   "crimes",
//   new Schema({
//     compnos: 152038722
//   })
// );

// MyModel2.find();

server.route({
  method: "GET",
  path: "/hello",
  handler: async function(request, h) {
    var nameApp = "baka hapi js";

    console.log("we are not connected");

    mongoose.model(
      "question",
      new Schema(
        { _id: String, location: String, weapontype: String },
        { collection: "crime" }
      )
    );
    var questions = mongoose.model("question");
    questions.find({}, function(err, data) {
      console.log(err, data, data.length);
      return h.response({ Crime: data });
    });

    var mycrime = await questions.find({});
    console.log(mycrime, mycrime.length);
    return mycrime;
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

// pour avoir la base de données mangoos
// db.once("open", function () {
//   // we're connected!
//   console.log("open");
// });
