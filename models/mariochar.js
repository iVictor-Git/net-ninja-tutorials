const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema and Model

const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

// Basically, everytime we make MarioChar, create it inside mariochar collection, based on MarioCharSchema
const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;
