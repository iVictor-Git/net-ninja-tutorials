const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests
describe("Saving records", () => {
  // create tests

  // it creates a single test
  it("Saves a record to the database", () => {
    // create character
    const char = new MarioChar({
      name: "Mario"
    });

    // need to save to db
    char.save(); // saves directly to the db
  });
});
