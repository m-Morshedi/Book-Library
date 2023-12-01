const express = require("express");
const bookCheckoutController = require("../controller/bookcheckout.controller");
const { checkoutBorrowerValidator } = require("../utils/borrower.validator");
const router = express.Router();

router
  .route("/checkout")
  .get(bookCheckoutController.getAllCheckoutController)
  .post(checkoutBorrowerValidator, bookCheckoutController.checkoutController);

router.route("/return").post(bookCheckoutController.returnController);

router
  .route("/books/:id")
  .get(bookCheckoutController.borrowerHistoryController);

module.exports = router;
