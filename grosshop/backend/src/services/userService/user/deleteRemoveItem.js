import { User } from "../../../models/index.js"; // Annahme: Pfad zum Benutzermodell

export const deleteRemoveItem = async (itemId) => {
  try {
    // Benutzer mit dem Element im Warenkorb oder der Wishlist abrufen
    const user = await User.findOne({ $or: [{ "cart.productId": itemId }, { "wishlist.productId": itemId }] });

    if (!user) {
      throw new Error('User not found');
    }

    // Element aus dem Warenkorb entfernen, wenn vorhanden
    user.cart = user.cart.filter(item => item.productId.toString() !== itemId);

    // Element aus der Wishlist entfernen, wenn vorhanden
    user.wishlist = user.wishlist.filter(item => item.productId.toString() !== itemId);

    // Benutzer speichern, um die Änderungen zu übernehmen
    await user.save();

    return user; // Rückgabe des aktualisierten Benutzers nach dem Löschen des Elements
  } catch (error) {
    throw new Error('Error deleting item');
  }
};
