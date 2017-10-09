const Article = require("../models/Article");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    console.log(req.body)
    Article.create(req.body)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => console.log(err))
  },

  findSaved: function(req, res) {
    Article.find()
      .sort({ date: -1 })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => console.log(err))
  },

  removeSaved: function(req, res) {
    Article.findById({ _id: req.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(err => console.log(err))
  }
};
