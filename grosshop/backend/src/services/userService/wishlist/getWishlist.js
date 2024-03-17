import { User } from "../../../models/index.js";
import AppError from "../../../utils/AppError.js";

export const getWishlist = async (userId, next) => {
  try {
    // Finde den Benutzer anhand der Benutzer-ID
    const user = await User.findById(userId);

    if (!user) return next(new AppError("No user found", 404));

    // Gib die Wishlist des Benutzers zurück
    return user.wishlist;
  } catch (error) {
    throw error; // Werfe den Fehler weiter, um ihn im Aufrufer zu behandeln
  }
};
