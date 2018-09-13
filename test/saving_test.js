const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests
describe("Saving records", () => {
  // create tests

  // it creates a single test
  it("Saves a record to the database", done => {
    // passed done into cb
    // create character
    const char = new MarioChar({
      name: "Mario"
    });

    // need to save to db
    char
      .save()
      .then(() => {
        assert(char.isNew === false); // not sure why I can't just negate the result of isNew
        done(); // because it is async, we need to tell mocha the test is done
      })
      .catch(err => {}); // saves directly to the db
    // save is async
  });
});
