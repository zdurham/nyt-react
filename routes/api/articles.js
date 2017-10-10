const router = require("express").Router();
const articleController = require("../../controllers/articleController");


router.get('/', articleController.findSaved)

router.post("/", articleController.create)

router.post('/:id', articleController.removeSaved)

module.exports = router;