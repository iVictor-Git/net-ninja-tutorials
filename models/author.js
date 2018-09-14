const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const BookSchema = new Schema({
    title: String,
    pages: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

// Basically, everytime we make MarioChar, create it inside mariochar collection, based on MarioCharSchema
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
