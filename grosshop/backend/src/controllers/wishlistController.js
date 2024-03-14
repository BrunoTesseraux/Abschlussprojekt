import { catchAsync } from "../utils/catchAsync.js";

const getWishlistCtrl = catchAsync(async (req, res, next) => {});

const patchOneWishlistItemCtrl = catchAsync(async (req, res, next) => {});

const deleteWishlistItemCtrl = catchAsync(async (req, res, next) => {});

export const WishlistController = {
  getWishlistCtrl,
  patchOneWishlistItemCtrl,
  deleteWishlistItemCtrl,
};

export default WishlistController;
