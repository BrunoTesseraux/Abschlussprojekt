import { catchAsync } from "../utils/catchAsync.js";

const getAllOrdersCtrl = catchAsync(async (req, res, next) => {});

const postUserOrder = catchAsync(async (req, res, next) => {});

const patchUserOrder = catchAsync(async (req, res, next) => {});

export const OrderController = {
  getAllOrdersCtrl,
  postUserOrder,
  patchUserOrder,
};

export default OrderController;
