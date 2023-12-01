const { check } = require("express-validator");
const validatorMiddleware = require("../middleware/validator.middleware");

exports.createBookValidator = [
  check("title").notEmpty().withMessage("Title is required"),
  check("author").notEmpty().withMessage("Author is required"),
  check("isbn").notEmpty().withMessage("ISBN is required"),
  check("available_quantity")
    .isNumeric()
    .withMessage("Available quantity is required"),
  check("shelf_location").isNumeric().withMessage("Shelf location is required"),
  validatorMiddleware,
];

exports.deleteBookValidator = [
  check("book_id").isNumeric().withMessage("Book id is Must be number"),
  validatorMiddleware,
];

exports.getOneBookValidator = [
  check("book_id")
    .isNumeric()
    .withMessage("Book id Must be number or this book Id is not valid"),
  validatorMiddleware,
];
