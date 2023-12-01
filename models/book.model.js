const dbConnection = require("../config/database");

// Book Schema
// +--------------------+--------------+------+-----+---------+----------------+
// | Field              | Type         | Null | Key | Default | Extra          |
// +--------------------+--------------+------+-----+---------+----------------+
// | book_id            | int unsigned | NO   | PRI | NULL    | auto_increment |
// | title              | varchar(100) | NO   |     | NULL    |                |
// | author             | varchar(50)  | NO   |     | NULL    |                |
// | available_quantity | int          | YES  |     | NULL    |                |
// | isbn               | int          | NO   |     | NULL    |                |
// | shelf_location     | int          | NO   |     | NULL    |                |
// +--------------------+--------------+------+-----+---------+----------------+

class Book {
  static async getAll() {
    return new Promise((resolve) => {
      dbConnection.query("SELECT * FROM book", (err, results) => {
        if (err) throw err;
        resolve(results);
      });
    });
  }

  static async create(book) {
    return new Promise((resolve) => {
      dbConnection.query("INSERT INTO book SET ?", book, (err, results) => {
        if (err) throw err;
        resolve(results);
      });
    });
  }

  static async update(book, id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "UPDATE book SET ? WHERE book_id = ?",
        [book, id],
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  static async delete(id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "DELETE FROM book WHERE book_id = ?",
        id,
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  static async getOne(id) {
    return new Promise((resolve) => {
      dbConnection.query(
        "SELECT * FROM book WHERE book_id = ?",
        id,
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }

  static async search(query) {
    return new Promise((resolve) => {
      dbConnection.query(
        "SELECT * FROM book WHERE title LIKE ? OR author LIKE ? OR isbn LIKE ?",
        [`%${query}%`, `%${query}%`, `%${query}%`],
        (err, results) => {
          if (err) throw err;
          resolve(results);
        }
      );
    });
  }
}

module.exports = Book;
