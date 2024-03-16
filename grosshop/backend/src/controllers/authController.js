import jwt from "jsonwebtoken";
import crypto from "crypto";

import { OK, CREATED } from "../helpers/httpStatusCodes.js";
import { UserService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";
import User from "../models/userSchema.js";
import AppError from "../utils/AppError.js";
import sendEmail from "../utils/email.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

const postSignupCtrl = catchAsync(async (req, res, next) => {
  console.log("================", req.body);
  const newUser = await UserService.registerUser(req.body, next);
  createSendToken(newUser, OK, res);
});

const postLoginCtrl = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password)
    return next(new AppError("Please provide email and password", 400));

  // 2) Check if user exist && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 3) If everything ok, send token to client
  createSendToken(user, OK, res);
});

const patchUpdatePasswordCtrl = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select("+password");

  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong.", 401));
  }
  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4) Log user in, send JWT
  createSendToken(user, OK, res);
});

const postForgotPasswordCtrl = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with email address.", 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;
  console.log("===================", resetURL);
  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL} .\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(OK).json({ status: "success", message: "Token sent to email" });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "There was an error sending the email. Try again later!",
        500
      )
    );
  }
});

const patchResetPasswordCtrl = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired,and there is user, set the new password
  if (!user) return next(new AppError("'Token is invalid or has expired", 400));
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  // 3) Update changedPassowrdAt property for the user
  // 4) Log the user in, send JWT
  createSendToken(user, OK, res);
});

const AuthController = {
  postSignupCtrl,
  postLoginCtrl,
  patchUpdatePasswordCtrl,
  postForgotPasswordCtrl,
  patchResetPasswordCtrl,
};

export default AuthController;
