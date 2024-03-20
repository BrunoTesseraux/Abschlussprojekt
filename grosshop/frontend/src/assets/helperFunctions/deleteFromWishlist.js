import { backendUrl } from "../../api/api";

export const deleteFromWishlist = async (product, user) => {
    try {
        const requestBody = {
                productId: product._id
          };

        // HTTP-Anfrage senden, um die Wunschliste im Backend zu aktualisieren
        const response = await fetch(`${backendUrl}/api/v1/users/${user._id}/wishlist`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( [requestBody] )
        });

        if (!response.ok) {
            throw new Error(`Failed to update wishlist: ${response.status}`);
        }

        // Aktualisieren Sie den Benutzerkontext mit dem aktualisierten Benutzer
    } catch (error) {
        console.error("Error updating wishlist:", error);
        // Wenn ein Fehler auftritt, den Like-Zustand zurücksetzen
        // setLikeSrc("/like2.svg");
    }
}