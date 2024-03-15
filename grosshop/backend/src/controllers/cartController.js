import { catchAsync } from "../utils/catchAsync.js";

const getCartCtrl = catchAsync(async (req, res, next) => {});

const patchOneCartItemCtrl = catchAsync(async (req, res, next) => {});

const patchManyCartItemCtrl = catchAsync(async (req, res, next) => {});

// const deleteCartItemCtrl = catchAsync(async (req, res, next) => {});

const CartController = {
  getCartCtrl,
  patchOneCartItemCtrl,
  patchManyCartItemCtrl,
  // deleteCartItemCtrl,
};

export default CartController;
