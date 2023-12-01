const BookCheckout = require("../models/book.checkout");
const ApiError = require("../utils/apiError");

class BookCheckoutController {
  static async checkoutController(req, res, next) {
    try {
      const updatedBorrower = await BookCheckout.checkout(
        req.body.book_id,
        req.body.borrower_id
      );
      res.status(200).json({ msg: "Book checked out successfully" });
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not updated. Try again.", 500)
      );
    }
  }

  static async getAllCheckoutController(req, res, next) {
    try {
      const checkout = await BookCheckout.getAllCheckout();
      res.status(200).json(checkout);
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }

  static async returnController(req, res, next) {
    try {
      const updatedBorrower = await BookCheckout.returnbooked(
        req.body.book_id,
        req.body.borrower_id
      );
      res.status(200).json({ msg: "Book returned successfully" });
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not updated. Try again.", 500)
      );
    }
  }

  static async borrowerHistoryController(req, res, next) {
    try {
      const history = await BookCheckout.borrowerHistory(req.params.id);
      res.status(200).json(history);
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }
}

module.exports = BookCheckoutController;
