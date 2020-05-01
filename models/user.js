const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    hobbies: {
      type: String,
      enum: ["n/a", "cricket", "basketball", "vollayball"],
      default: "n/a",
      required: false,
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

function validateUser(User) {
  const schema = {
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    isPremium: Joi.boolean(),
    hobbies: Joi.string().valid(["n/a", "cricket", "basketball", "vollayball"]),
    phone: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(User, schema);
}

exports.User = User;
exports.validate = validateUser;
