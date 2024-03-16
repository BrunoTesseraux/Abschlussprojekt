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

export const patchUpdateProfileCtrl = catchAsync(
  async (req, res, next) => {
      const updateUser = await UserService.updateUserProfil(req.params.uid, req.body, next);
      res.status(200).json({
        status: 'success',
        data: { user: updateUser }
      });
  }
);

export const deleteUserCtrl = catchAsync(async (req, res, next) => {
  const deletedUser = await UserService.deleteUser(req.params.uid);
  res.status(OK).json({
    status: "success",
    data: { deletedUser },
  });
});

export const deleteRemoveItemCtrl = catchAsync(
  async (req, res, next) => {
    const userId = req.user.uid; // Annahme: Die Benutzer-ID ist im Auth-Token enthalten
    const itemId = req.params.itemId; // Die ID des zu löschenden Elements

    try {
      const user = await UserService.getOneUser(userId); // UserService verwenden, um den Benutzer abzurufen

      if (!user) {
        return next(new AppError('User not found', NOT_FOUND));
      }

      // Element aus der Wishlist entfernen
      user.wishlist = user.wishlist.filter(item => item._id.toString() !== itemId);

      // Element aus dem Warenkorb entfernen
      user.cart = user.cart.filter(item => item._id.toString() !== itemId);

      // Benutzer speichern, um die Änderungen zu übernehmen
      await user.save();

      // Erfolgreiche Antwort senden
      res.status(200).json({
        status: 'success',
        message: 'Item removed successfully'
      });
    } catch (error) {
      next(error);
    }
  }
);
  
  

export const UserController = {
  getOneUserCtrl,
  patchUpdateProfileCtrl,
  deleteUserCtrl,
  deleteRemoveItemCtrl,
};

export default UserController;
