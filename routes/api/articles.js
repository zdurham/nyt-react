const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/books"
router.post("/", articleController.create)

// Matches with "/api/books/:id"
// router
  // .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;