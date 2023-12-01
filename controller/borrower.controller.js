const Borrower = require("../models/borrower.model");
const ApiError = require("../utils/apiError");

class UserController {
  static async create(req, res, next) {
    try {
      const newBorrower = await Borrower.createBorrower(req.body);
      res.status(201).json(newBorrower);
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not created. Try again.", 500)
      );
    }
  }

  static async getAll(req, res, next) {
    try {
      const borrowers = await Borrower.getAllBorrowers();
      res.status(200).json(borrowers);
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not found. Try again.", 500)
      );
    }
  }

  static async update(req, res, next) {
    try {
      const updatedBorrower = await Borrower.updateBorrower(
        req.body,
        req.params.id
      );
      res.status(200).json(updatedBorrower);
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not updated. Try again.", 500)
      );
    }
  }

  static async delete(req, res, next) {
    try {
      const deletedBorrower = await Borrower.deleteBorrower(req.params.id);
      res.status(200).json(deletedBorrower);
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not deleted. Try again.", 500)
      );
    }
  }
}

module.exports = UserController;
