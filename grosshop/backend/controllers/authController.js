import { catchAsync } from "../utils/catchAsync.js";

const postSignupCtrl = catchAsync(async (req, res, next) => {});

const postLoginCtrl = catchAsync(async (req, res, next) => {});

const patchUpdatePasswordCtrl = catchAsync(async (req, res, next) => {});

const postForgotPasswordCtrl = catchAsync(async (req, res, next) => {});

const patchResetPasswordCtrl = catchAsync(async (req, res, next) => {});

export const AuthController = {
  postSignupCtrl,
  postLoginCtrl,
  patchUpdatePasswordCtrl,
  postForgotPasswordCtrl,
  patchResetPasswordCtrl,
};
