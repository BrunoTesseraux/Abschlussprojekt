import { User } from '../../../models/index.js'; 

export const deleteWishlistItem = async (userId, wishlistItemId) => {
    try {
        // Finde den Benutzer anhand der Benutzer-ID
        const user = await User.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Finde das Wishlist-Element, das gelöscht werden soll
        const wishlistItemIndex = user.wishlist.findIndex(item => item._id === wishlistItemId);

        if (wishlistItemIndex === -1) {
            throw new Error('Wishlist item not found');
        }

        // Entferne das Wishlist-Element aus der Liste
        user.wishlist.splice(wishlistItemIndex, 1);

        // Speichere die Änderungen im Benutzerobjekt
        await user.save();

        return user.wishlist; // Gib die aktualisierte Wishlist zurück
    } catch (error) {
        throw error; // Werfe den Fehler weiter, um ihn im Aufrufer zu behandeln
    }
};
