const express = require("express");
const bookController = require("../controller/book.controller");
const {
  createBookValidator,
  deleteBookValidator,
  getOneBookValidator,
} = require("../utils/books.validator");
const router = express.Router();

router
  .route("/")
  .get(bookController.getAll)
  .post(createBookValidator, bookController.create);

router
  .route("/:id")
  .get(getOneBookValidator, bookController.getOne)
  .put(bookController.update)
  .delete(deleteBookValidator, bookController.delete);

router.get("/search", bookController.search);

module.exports = router;
