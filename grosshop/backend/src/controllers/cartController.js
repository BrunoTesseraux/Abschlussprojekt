import { catchAsync } from "../utils/catchAsync.js";

const getCartCtrl = catchAsync(async (req, res, next) => {});

const patchCartItemCtrl = catchAsync(async (req, res, next) => {});
const deleteCartItemCtrl = catchAsync(async (req, res, next) => {});
const CartController = {
  getCartCtrl,
  patchCartItemCtrl,
  deleteCartItemCtrl,
};

export default CartController