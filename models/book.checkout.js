const dbConnection = require("../config/database");

class BookCheckout {
  static async checkout(book_id, borrower_id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "INSERT INTO book_checkout (book_id, borrower_id, checkout_date, return_date) VALUES (?, ?, ?, ?)",
        [book_id, borrower_id, new Date(), null],
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  static async getAllCheckout() {
    return new Promise((resolve) => {
      dbConnection.query("SELECT * FROM book_checkout", (err, results) => {
        if (err) throw err;
        resolve(results);
      });
    });
  }

  static async returnbooked(book_id, borrower_id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "UPDATE book_checkout SET return_date = ? WHERE book_id = ? AND borrower_id = ?",
        [new Date(), book_id, borrower_id],
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  static async borrowerHistory(borrower_id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "SELECT * FROM book_checkout WHERE borrower_id = ?",
        borrower_id,
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }
}

module.exports = BookCheckout;
