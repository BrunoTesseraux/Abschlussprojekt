import { catchAsync } from "../utils/catchAsync.js";

const getWishlistCtrl = catchAsync(async (req, res, next) => {});

const patchOneItemCtrl = catchAsync(async (req, res, next) => {});

const deleteOneItemCtrl = catchAsync(async (req, res, next) => {});

const deleteManyItemsCtrl = catchAsync(async (req, res, next) => {});

export const WishlistController = {
  getWishlistCtrl,
  patchOneItemCtrl,
  deleteOneItemCtrl,
  deleteManyItemsCtrl,
};
