import { catchAsync } from "../utils/catchAsync.js";

export const getOneUserCtrl = catchAsync(async (req, res, next) => {});

export const patchUpdateProfileCtrl = catchAsync(async (req, res, next) => {});

export const deleteUserCtrl = catchAsync(async (req, res, next) => {});

export const deleteRemoveItemCtrl = catchAsync(async (req, res, next) => {});

export const UserController = {
  getOneUserCtrl,
  patchUpdateProfileCtrl,
  deleteUserCtrl,
  deleteRemoveItemCtrl,
};

export default UserController;
