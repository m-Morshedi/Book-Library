const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE || "books",
});

pool.getConnection(() => {
  console.log("Database connected");
});

module.exports = pool;
