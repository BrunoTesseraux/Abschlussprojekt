import { catchAsync } from "../utils/catchAsync.js";
import { UserService } from "../services/index.js";
import { OK } from "../helpers/httpStatusCodes.js";

export const getOneUserCtrl = catchAsync(async (req, res, next) => {
  const user = await UserService.getOneUser(req.params.uid);
  res.status(OK).json({
    status: "success",
    data: { user },
  });
});

export const patchUpdateProfileCtrl = catchAsync(async (req, res, next) => {
  const updateUser = await UserService.updateUserProfil(next);
});

export const deleteUserCtrl = catchAsync(async (req, res, next) => {
  const deletedUser = await UserService.deleteUser(req.params.uid);
  res.status(OK).json({
    status: "success",
    data: { deletedUser },
  });
});

export const deleteRemoveItemCtrl = catchAsync(async (req, res, next) => {});

export const UserController = {
  getOneUserCtrl,
  patchUpdateProfileCtrl,
  deleteUserCtrl,
  deleteRemoveItemCtrl,
};

export default UserController;
