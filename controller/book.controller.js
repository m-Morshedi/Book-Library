const Book = require("../models/book.model");
const ApiError = require("../utils/apiError");

class bookController {
  static async getAll(req, res, next) {
    try {
      const books = await Book.getAll();
      res.status(200).json(books);
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }

  static async create(req, res, next) {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (error) {
      next(new ApiError(error.message || "Book not created. Try again.", 500));
    }
  }

  static async update(req, res, next) {
    try {
      const book = await Book.update(req.body, req.params.id);
      res.status(200).json(book);
    } catch (error) {
      next(new ApiError(error.message || "Book not updated. Try again.", 500));
    }
  }

  static async delete(req, res, next) {
    try {
      const book = await Book.delete(req.params.id);
      res.status(200).json(book);
    } catch (error) {
      next(new ApiError(error.message || "Book not deleted. Try again.", 500));
    }
  }

  static async getOne(req, res, next) {
    try {
      const book = await Book.getOne(req.params.id);
      res.status(200).json(book);
    } catch (error) {
      next(new ApiError(error.message || "Book not found. Try again.", 500));
    }
  }

  static async search(req, res, next) {
    try {
      const books = await Book.search(req.query.keyword);
      res.status(200).json(books);
    } catch (error) {
      next(new ApiError(error.message || "Book not found. Try again.", 500));
    }
  }
}

module.exports = bookController;
