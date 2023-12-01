const dbConnection = require("../config/database");

// Borrower Schema
// +---------------+--------------+------+-----+-------------------+-------------------+
// | Field         | Type         | Null | Key | Default           | Extra             |
// +---------------+--------------+------+-----+-------------------+-------------------+
// | borrower_id   | int unsigned | NO   | PRI | NULL              | auto_increment    |
// | name          | varchar(60)  | NO   |     | NULL              |                   |
// | email         | varchar(150) | NO   |     | NULL              |                   |
// | register_date | datetime     | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
// +---------------+--------------+------+-----+-------------------+-------------------+

// book_checkout Schema
// +---------------+--------------+------+-----+-------------------+-------------------+
// | Field         | Type         | Null | Key | Default           | Extra             |
// +---------------+--------------+------+-----+-------------------+-------------------+
// | checkout_id   | int unsigned | NO   | PRI | NULL              | auto_increment    |
// | book_id       | int unsigned | NO   | MUL | NULL              |                   |
// | borrower_id   | int unsigned | NO   | MUL | NULL              |                   |
// | checkout_date | timestamp    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
// | return_date   | timestamp    | YES  |     | NULL              |                   |
// +---------------+--------------+------+-----+-------------------+-------------------+

class Borrower {
  static async getAllBorrowers() {
    return new Promise((resolve) => {
      dbConnection.query("SELECT * FROM borrower", (err, results) => {
        if (err) throw err;
        resolve(results);
      });
    });
  }

  static async createBorrower(borrower) {
    return new Promise((resolve) => {
      dbConnection.query(
        "INSERT INTO borrower SET ?",
        borrower,
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  static async updateBorrower(borrower, id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "UPDATE borrower SET ? WHERE borrower_id = ?",
        [borrower, id],
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  static async deleteBorrower(id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "DELETE FROM borrower WHERE borrower_id = ?",
        id,
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  // static async checkout(book_id, borrower_id) {
  //   return new Promise((resolve) => {
  //     dbConnection.query(
  //       "INSERT INTO book_checkout (book_id, borrower_id, checkout_date, return_date) VALUES (?, ?, ?, ?)",
  //       [book_id, borrower_id, new Date(), null],
  //       (err, results) => {
  //         if (err) throw err;
  //         resolve(results);
  //       }
  //     );
  //   });
  // }

  // static async getAllCheckout() {
  //   return new Promise((resolve) => {
  //     dbConnection.query("SELECT * FROM book_checkout", (err, results) => {
  //       if (err) throw err;
  //       resolve(results);
  //     });
  //   });
  // }

  // static async returnbooked(book_id, borrower_id) {
  //   return new Promise((resolve) => {
  //     dbConnection.query(
  //       "UPDATE book_checkout SET return_date = ? WHERE book_id = ? AND borrower_id = ?",
  //       [new Date(), book_id, borrower_id],
  //       (err, results) => {
  //         if (err) throw err;
  //         resolve(results);
  //       }
  //     );
  //   });
  // }

  // static async borrowerHistory(borrower_id) {
  //   return new Promise((resolve) => {
  //     dbConnection.query(
  //       "SELECT * FROM book_checkout WHERE borrower_id = ?",
  //       borrower_id,
  //       (err, results) => {
  //         if (err) throw err;
  //         resolve(results);
  //       }
  //     );
  //   });
  // }
}

module.exports = Borrower;
