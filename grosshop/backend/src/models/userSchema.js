import mongoose from "mongoose";
import validator from "validator";

// User Schema
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      minlength: [2, "A user username must have more or equal 2 charcters"],
      maxlength: [200, "A user username must have less or equal 200 charcters"],
    },
    lastname: {
      type: String,
      trim: true,
      minlength: [2, "A user username must have more or equal 2 charcters"],
      maxlength: [200, "A user username must have less or equal 200 charcters"],
    },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valide email"],
      trim: true,
      minlength: [6, "A user email must have more or equal 6 charcters"],
      maxlength: [200, "A user email must have less or equal 200 charcters"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
      trim: true,
      minlength: [8, "A user password must have more or equal 8 charcters"],
      maxlength: [100, "A user password must have less or equal 100 charcters"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: "Password are not the same!",
      },
    },
    dateOfBirth: { type: Date },
    address: { type: Object },
    phoneNumber: { type: String },
    profilePicture: {
      type: String,
      trim: true,
      minlength: [
        3,
        "A user profile photo must have more or equal 3 charcters",
      ],
      maxlength: [
        200,
        "A user profile photo must have less or equal 200 charcters",
      ],
    },
    member: { type: Boolean }.type,
    wishlist: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: {
          type: Number,
          required: [true, "A user must have a wishlist"],
          min: 1,
        },
      },
    ],
    cart: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: {
          type: Number,
          required: [true, "A user must have a cart"],
          min: 1,
        },
      },
    ],
    orderHistory: [
      {
        orderId: { type: mongoose.Types.ObjectId, ref: "Order" },
        orderDate: { type: Date, default: Date.now },
      },
    ],
  },
  { collection: "User", timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
