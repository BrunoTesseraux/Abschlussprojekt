import { catchAsync } from "../utils/catchAsync.js";

const getCartCtrl = catchAsync(async (req, res, next) => {});

const patchCartCtrl = catchAsync(async (req, res, next) => {});

const deleteCartCtrl = catchAsync(async (req, res, next) => {});

export const CartController = {
  getCartCtrl,
  patchCartCtrl,
  deleteCartCtrl,
};
