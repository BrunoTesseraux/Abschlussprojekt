import { catchAsync } from "../utils/catchAsync.js";
import { UserService } from "../services/index.js";
import { OK } from "../helpers/httpStatusCodes.js";
import AppError from "../utils/AppError.js";

export const getOneUserCtrl = catchAsync(async (req, res, next) => {
  const user = await UserService.getOneUser(req.params.uid);
  res.status(OK).json({
    status: "success",
    data: { user },
  });
});

export const patchUpdateProfileCtrl = catchAsync(async (req, res, next) => {
  const updateUser = await UserService.updateUserProfil(
    req.params.uid,
    req.body,
    next
  );
  res.status(200).json({
    status: "success",
    data: { user: updateUser },
  });
});

export const deleteUserCtrl = catchAsync(async (req, res, next) => {
  const deletedUser = await UserService.deleteUser(req.params.uid);
  res.status(OK).json({
    status: "success",
    data: { deletedUser },
  });
});

export const deleteRemoveItemCtrl = catchAsync(async (req, res, next) => {
  const userId = req.user.uid; // Annahme: Die Benutzer-ID ist im Auth-Token enthalten
  const itemId = req.params.itemId; // Die ID des zu löschenden Elements

  try {
    const user = await UserService.getOneUser(userId); // UserService verwenden, um den Benutzer abzurufen

    if (!user) {
      return next(new AppError("User not found", NOT_FOUND));
    }

    // Element aus der Wishlist entfernen
    user.wishlist = user.wishlist.filter(
      (item) => item._id.toString() !== itemId
    );

    // Element aus dem Warenkorb entfernen
    user.cart = user.cart.filter((item) => item._id.toString() !== itemId);

    // Benutzer speichern, um die Änderungen zu übernehmen
    await user.save();

    // Erfolgreiche Antwort senden
    res.status(200).json({
      status: "success",
      message: "Item removed successfully",
    });
  } catch (error) {
    next(error);
  }
});

export const uploadProfilePictureCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid; // Oder hole die User-ID aus der Session/Auth-Token
  const file = req.file;

  if (!file) {
    return next(new AppError("Kein Bild zum Hochladen gefunden.", 400));
  }

  // Pfad zum Bild speichern oder Bild in Datenbank hochladen, abhängig von der Praxis
  // Zum Beispiel: Pfad in User-Dokument speichern
  await UserService.updateUserProfil(
    userId,
    {
      profilePicture: file.path,
    },
    next
  );

  res.status(200).json({
    status: "success",
    message: "Bild erfolgreich hochgeladen",
    data: { filePath: file.path },
  });
});

export const UserController = {
  getOneUserCtrl,
  patchUpdateProfileCtrl,
  deleteUserCtrl,
  deleteRemoveItemCtrl,
  uploadProfilePictureCtrl,
};

export default UserController;
