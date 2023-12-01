require("dotenv").config();
const express = require("express");
const bookRouter = require("./routes/books.route");
const userRouter = require("./routes/borrower.route");
const bookCheckoutRoute = require("./routes/book.checkout.route");
const ApiError = require("./utils/apiError");

const app = express();

app.use(express.json());

app.use("/api/books", bookRouter);
app.use("/api/borrower", userRouter);
app.use("/api/borrow_history", bookCheckoutRoute);

// global middleware for not found routes
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error handling middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    error: err,
    message: err.message,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("App listening on port 3000");
});
