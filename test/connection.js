const mongoose = require("mongoose");

// connect to mongodb
mongoose.connect("mongodb://localhost/testaroo");

// listen to this event, open, once
mongoose.connection
  .once("open", () => {
    console.log("Connection has been made, now make fireworks...");
  })
  .on("error", error => {
    console.log(error);
  });
