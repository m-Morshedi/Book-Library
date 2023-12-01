const express = require("express");
const UserController = require("../controller/borrower.controller");
const {
  createBorrowerValidator,
  updateBorrowerValidator,
  deleteBorrowerValidator,
} = require("../utils/borrower.validator");
const router = express.Router();

router
  .route("/")
  .get(UserController.getAll)
  .post(createBorrowerValidator, UserController.create);

router
  .route("/:id")
  .put(updateBorrowerValidator, UserController.update)
  .delete(deleteBorrowerValidator, UserController.delete);

module.exports = router;
