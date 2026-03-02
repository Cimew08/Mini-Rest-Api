const userModel = require("../model/user");
const CustomError = require("../helper/error/customErrorHandler");
const asyncWrapper = require("express-async-handler");

const User = asyncWrapper(async (req, res, next) => {
  // Destructure user data from request body
  const { name, email, password, role } = req.body;

  // Create and save new user to database
  const user = await userModel.create({
    name,
    email,
    password,
    role,
  });

  // Return all user details in the response
  res.status(200).json({
    success: true,
    data: user,
  });
  // Log basic user info to console
  console.log({
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
  });
});

// Error testing route to trigger the global handler
const errorTest = (req, res, next) => {
  return next(new TypeError("TypeError"));
};

module.exports = { User, errorTest };
