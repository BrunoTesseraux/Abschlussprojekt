import { useContext, useState } from "react";
import { UserContext } from "../../contextes/UserContext";
import { backendUrl } from "../../api/api";

export const useLikeToggle = () => {
    const [likeSrc, setLikeSrc] = useState("/like.svg");
    
    const handleLikeClick = async (product, user) => {
        try {
            console.log(user);
            const newLikeSrc = likeSrc === "/like.svg" ? "/like2.svg" : "/like.svg";
            setLikeSrc(newLikeSrc);

            // Erstellen Sie eine Kopie des Benutzers
            const updatedUser = { ...user };

            // Überprüfen, ob das Produkt bereits in der Wunschliste vorhanden ist
            const existingProductIndex = updatedUser.wishlist.findIndex(
                (item) => String(item.productId) === product._id
            );

            if (existingProductIndex === -1) {
                // Produkt ist noch nicht in der Wunschliste, also hinzufügen
                updatedUser.wishlist.push({ productId: product._id });
            } else {
                // Produkt ist bereits in der Wunschliste, also entfernen
                updatedUser.wishlist.splice(existingProductIndex, 1);
            }

            // HTTP-Anfrage senden, um die Wunschliste im Backend zu aktualisieren
            const response = await fetch(`${backendUrl}/api/v1/users/${user._id}/wishlist`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ wishlist: updatedUser.wishlist })
            });

            if (!response.ok) {
                throw new Error(`Failed to update wishlist: ${response.status}`);
            }

            // Aktualisieren Sie den Benutzerkontext mit dem aktualisierten Benutzer
        } catch (error) {
            console.error("Error updating wishlist:", error);
            // Wenn ein Fehler auftritt, den Like-Zustand zurücksetzen
            setLikeSrc("/like.svg");
        }
    };

    return [likeSrc, handleLikeClick];
};