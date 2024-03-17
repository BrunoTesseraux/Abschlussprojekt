import { User } from "../../../models/index.js";

export const removeWishlistItem = async (userId, wishlistItemIds) => {
  try {
    console.log("WishlistItemIds: ", wishlistItemIds);
    // Finde den Benutzer anhand der Benutzer-ID
    const user = await User.findById(userId);

    if (!user) {
      return next(new AppError("No User Found", 404));
    }

    // Extrahiere die IDs aus dem wishlistItemIds-Array
    const idsToRemove = wishlistItemIds.map((item) => item.productId);

    // Filtere die Wishlist, um nur die Produkte zu behalten, deren IDs NICHT in idsToRemove enthalten sind
    user.wishlist = user.wishlist.filter(
      (item) => !idsToRemove.includes(item.productId.toString())
    );

    console.log(user.wishlist);
    await user.save();

    return user.wishlist;
  } catch (error) {
    throw error; // Werfe den Fehler weiter, um ihn im Aufrufer zu behandeln
  }
};
