import { OK, CREATED } from "../helpers/httpStatusCodes.js";
import { UserService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

const postSignupCtrl = catchAsync(
  async (req, res, next) => {
    console.log("================", req.body);
    const newUser = await UserService.registerUser(req.body);
    res.status(CREATED).json({
      status: "success",
      data: { user: newUser }
    });
  });

const postLoginCtrl = catchAsync(async (req, res, next) => {});

const patchUpdatePasswordCtrl = catchAsync(async (req, res, next) => {});

const postForgotPasswordCtrl = catchAsync(async (req, res, next) => {});

const patchResetPasswordCtrl = catchAsync(async (req, res, next) => {});

const AuthController = {
  postSignupCtrl,
  postLoginCtrl,
  patchUpdatePasswordCtrl,
  postForgotPasswordCtrl,
  patchResetPasswordCtrl,
};

export default AuthController;
