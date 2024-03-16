import { User } from '../../../models/index.js'; // Annahme: Pfad zur Benutzermodell-Datei

export const updateWishlist = async (userId, wishlistData) => {
    console.log(wishlistData);
    try {
        // Finde den Benutzer anhand der Benutzer-ID
        const user = await User.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Überprüfe, ob wishlistData ein einzelnes Wishlist-Element oder eine Liste von Wishlist-Elementen ist
        if (Array.isArray(wishlistData)) {
            // Wenn wishlistData eine Liste ist, iteriere durch die Liste und aktualisiere jedes Wishlist-Element
            wishlistData.forEach(async item => {
                const { productId, quantity } = item;
                const existingItem = user.wishlist.find(wishlistItem => wishlistItem.productId.toString() === productId.toString());
                
                if (existingItem) {
                    // Wenn das Produkt bereits auf der Wishlist ist, aktualisiere die Menge
                    existingItem.quantity = quantity;
                } else {
                    // Wenn das Produkt nicht auf der Wishlist ist, füge es hinzu
                    user.wishlist.push({ productId, quantity });
                }
            });
        } else {
            // Wenn wishlistData ein einzelnes Wishlist-Element ist, aktualisiere es
            const { productId, quantity } = wishlistData;
            const existingItem = user.wishlist.find(item => item.productId.toString() === productId.toString());

            if (existingItem) {
                // Wenn das Produkt bereits auf der Wishlist ist, aktualisiere die Menge
                existingItem.quantity = quantity;
            } else {
                // Wenn das Produkt nicht auf der Wishlist ist, füge es hinzu
                user.wishlist.push({ productId, quantity });
            }
        }

        // Speichere die Änderungen im Benutzerobjekt
        await user.save();

        return user.wishlist; // Gib die aktualisierte Wishlist zurück
    } catch (error) {
        throw error; // Werfe den Fehler weiter, um ihn im Aufrufer zu behandeln
    }
};
