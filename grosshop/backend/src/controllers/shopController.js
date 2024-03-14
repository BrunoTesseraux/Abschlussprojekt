import { catchAsync } from "../utils/catchAsync.js";

const getAllShopsCtrl = catchAsync(async (req, res, next) => {});

const getOneShopCtrl = catchAsync(async (req, res, next) => {});

export const ShopController = {
  getAllShopsCtrl,
  getOneShopCtrl,
};

export default ShopController;
