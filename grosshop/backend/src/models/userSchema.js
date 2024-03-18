import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { addressSchema } from "./adressSchema.js";

// User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: [0, "A user name must have more or equal 2 charcters"],
      maxlength: [200, "A user name must have less or equal 200 charcters"],
      default: "",
    },
    // firstname: {
    //   type: String,
    //   trim: true,
    //   minlength: [2, "A user username must have more or equal 2 charcters"],
    //   maxlength: [200, "A user username must have less or equal 200 charcters"],
    // },
    // lastname: {
    //   type: String,
    //   trim: true,
    //   minlength: [2, "A user username must have more or equal 2 charcters"],
    //   maxlength: [200, "A user username must have less or equal 200 charcters"],
    // },
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
      // required: [true, "Please confirm your password"],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: "Password are not the same!",
      },
    },
    dateOfBirth: { type: String, default: "" },
    address: {
      type: addressSchema,
      default: {}
    },    
    phoneNumber: { type: String, default: "" },
    profilePicture: {
      type: String,
      trim: true,
      minlength: [
        0,
        "A user profile photo must have more or equal 3 charcters",
      ],
      maxlength: [
        200,
        "A user profile photo must have less or equal 200 charcters",
      ],
      default: "",
    },
    member: { type: Boolean },
    wishlist: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: {
          type: Number,
          required: [true, "A wishlist must have a quantity of a product"],
          min: 1,
        },
        inWishlist: { type: Boolean },
        _id: false,
      },
    ],
    cart: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: {
          type: Number,
          required: [true, "A cart must have a quantity of a product"],
          min: 1,
        },
        _id: false,
      },
    ],
    orderHistory: [
      {
        orderId: { type: mongoose.Types.ObjectId, ref: "Order" },
        orderDate: { type: Date, default: Date.now },
        _id: false,
      },
    ],
  },
  { collection: "Users", timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("email")) {
    user.email = user.email.toLowerCase();
  }

  // Only run this function if password was actually modified
  if (!user.isModified("password")) return next();

  // Hash the password with cost of 12
  user.password = await bcrypt.hash(user.password, 12);

  user.passwordConfirm = undefined;
});

userSchema.statics.findByEmail = function (email) {
  if (typeof email !== "string") return null;
  return this.findOne({ email: email.toLowerCase() });
};

userSchema.pre("save", function (next) {
  if (!this.isModified("password" || this.isNew)) return next();

  this.passwordChangeAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangeAt) {
    const changedTimestamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed Password
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;
