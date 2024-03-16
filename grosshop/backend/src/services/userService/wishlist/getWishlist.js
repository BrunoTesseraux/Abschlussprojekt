import { User } from '../../../models/index.js'; // Annahme: Pfad zur Benutzermodell-Datei

export const getWishlist = async (userId) => {
    try {
        // Finde den Benutzer anhand der Benutzer-ID
        const user = await User.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Gib die Wishlist des Benutzers zurück
        return user.wishlist;
    } catch (error) {
        throw error; // Werfe den Fehler weiter, um ihn im Aufrufer zu behandeln
    }
};
