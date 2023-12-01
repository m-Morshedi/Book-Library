const { check } = require("express-validator");
const validatorMiddleware = require("../middleware/validator.middleware");

exports.createBorrowerValidator = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email")
    .isEmail()
    .withMessage("Invalid email")
    .notEmpty()
    .withMessage("Email is required"),
  validatorMiddleware,
];

exports.updateBorrowerValidator = [
  check("borrower_id").isNumeric().withMessage("Borrower id must be number"),
  check("name").notEmpty().withMessage("Name is required"),
  check("email").optional().isEmail().withMessage("Invalid email"),
  validatorMiddleware,
];

exports.deleteBorrowerValidator = [
  check("borrower_id").isNumeric().withMessage("Borrower id must be number"),
];

exports.checkoutBorrowerValidator = [
  check("book_id").isNumeric().withMessage("Book id must be number"),
  check("borrower_id").isNumeric().withMessage("Borrower id must be number"),
];
