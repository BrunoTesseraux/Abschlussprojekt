import { backendUrl } from "../../api/api";

export const addToWishlist = async (product, user) => {
      
        
    try {
        const requestBody = {
                productId: product._id,
                quantity: 1,
                inWishlist: true
          };

        // HTTP-Anfrage senden, um die Wunschliste im Backend zu aktualisieren
        const response = await fetch(`${backendUrl}/api/v1/users/${user._id}/wishlist`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ wishlist : [requestBody] })
        });

        if (!response.ok) {
            throw new Error(`Failed to update wishlist: ${response.status}`);
        }

        // Aktualisieren Sie den Benutzerkontext mit dem aktualisierten Benutzer
    } catch (error) {
        console.error("Error updating wishlist:", error);
        // Wenn ein Fehler auftritt, den Like-Zustand zurücksetzen
        // setLikeSrc("/like.svg");
    }
}