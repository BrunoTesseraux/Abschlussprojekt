import { catchAsync } from "../utils/catchAsync.js";

const getOneUserCtrl = catchAsync(async (req, res, next) => {});

const patchUpdateProfileCtrl = catchAsync(async (req, res, next) => {});

const deleteUserCtrl = catchAsync(async (req, res, next) => {});

const deleteRemoveItemCtrl = catchAsync(async (req, res, next) => {});

export const UserController = {
  getOneUserCtrl,
  patchUpdateProfileCtrl,
  deleteUserCtrl,
  deleteRemoveItemCtrl,
};
