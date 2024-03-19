import mongoose from "mongoose";
import { User } from "../../../models/index.js"; // Annahme: Pfad zur Benutzermodell-Datei
import AppError from "../../../utils/AppError.js";

export const updateCartItem = async (userId, cartData, next) => {
  try {
    // Finde den Benutzer anhand der Benutzer-ID
    const user = await User.findById(userId);

    if (!user) return next(new AppError("No User Found", 404));

    // Verwende for...of für asynchrone Operationen innerhalb der Schleife
    for (const item of cartData) {
      const { productId, quantity, inCart } = item;
      const existingItemIndex = user.cart.findIndex((cartItem) =>
        cartItem?.productId?.equals(
          mongoose.Types.ObjectId.createFromHexString(productId)
        )
      );

      if (existingItemIndex > -1) {
        // Produkt existiert bereits im Cart, aktualisiere die Menge
        user.cart[existingItemIndex].quantity = quantity;
        user.cart[existingItemIndex].inCart = inCart;
      } else {
        // Produkt existiert nicht im Cart, füge es hinzu
        user.cart.push({
          productId: mongoose.Types.ObjectId.createFromHexString(productId),
          quantity,
          inCart,
        });
      }
    }

    // Speichere die Änderungen im Benutzerobjekt
    await user.save();

    return user.cart; // Gib die aktualisierte Wishlist zurück
  } catch (error) {
    throw error; // Werfe den Fehler weiter, um ihn im Aufrufer zu behandeln
  }
};
