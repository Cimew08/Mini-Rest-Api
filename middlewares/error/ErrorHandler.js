const CustomError = require("../../helper/error/customErrorHandler");

const errorHandler = (err, req, res, next) => {
  let customError = err;

  if (err.name === "SyntaxError") {
    customError = new CustomError("The syntax sent is incorrect.", 400);
  }
  if (err.name === "ValidationError") {
    customError = new CustomError("Validation Error Occurred", 400);
  }
  res.status(customError.status || 500).json({
    success: false,
    message: customError.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
