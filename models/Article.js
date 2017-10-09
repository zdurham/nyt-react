const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  added: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: true
  }
});

let Article = mongoose.model("Article", ArticleSchema)

module.exports = Article