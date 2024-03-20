import mongoose from "mongoose";
import { User } from "../../../models/index.js"; // Annahme: Pfad zur Benutzermodell-Datei
import AppError from "../../../utils/AppError.js";

export const updateWishlist = async (userId, wishlistData, next) => {
  try {
    // Finde den Benutzer anhand der Benutzer-ID
    const user = await User.findById(userId);

    if (!user) return next(new AppError("No User Found", 404));
    console.log(wishlistData);

    // Verwende for...of für asynchrone Operationen innerhalb der Schleife
    for (const item of wishlistData) {
      const { productId, quantity, inWishlist } = item;
      const existingItemIndex = user.wishlist.findIndex((wishlistItem) =>
        wishlistItem?.productId?.equals(
          mongoose.Types.ObjectId.createFromHexString(productId)
        )
      );

      if (existingItemIndex > -1) {
        // Produkt existiert bereits in der Wishlist, aktualisiere die Menge
        user.wishlist[existingItemIndex].quantity = quantity;
        user.wishlist[existingItemIndex].inWishlist = inWishlist;
      } else {
        // Produkt existiert nicht in der Wishlist, füge es hinzu
        user.wishlist.push({
          productId: mongoose.Types.ObjectId.createFromHexString(productId),
          quantity,
          inWishlist,
        });
      }
    }

    // Speichere die Änderungen im Benutzerobjekt
    await user.save();

    return user.wishlist; // Gib die aktualisierte Wishlist zurück
  } catch (error) {
    throw error; // Werfe den Fehler weiter, um ihn im Aufrufer zu behandeln
  }
};
