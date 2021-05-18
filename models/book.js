const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  authors: {
    type: Array,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
