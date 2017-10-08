const router = require("express").Router();
const articleController = require("../../controllers/articleController");


router.get('/', articleController.findSaved)

router.post("/", articleController.create)



// Matches with "/api/books/:id"
// router
  // .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;