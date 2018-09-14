require("dotenv").config();
const mongoose = require("mongoose");

// ES6 Promises
mongoose.Promise = global.Promise;

// Writing a hook to make sure we have a connection before running tests for CRUD
// connect to db before test run
before(done => {
  // we pass done as a parameter because we need to know when this is done before we actually start a test
  // connect to mongodb
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true }
  );

  // listen to this event, open, once
  mongoose.connection
    .once("open", () => {
      console.log("Connection has been made, now make fireworks...");
      done(); // call done fn when this is done
    })
    .on("error", error => {
      console.log(error);
    });
});

// drop char collection before each test
beforeEach(done => {
  mongoose.connection.collections.mariochars.drop(() => {
    done(); // says we're done, you can run the test
  });
});
