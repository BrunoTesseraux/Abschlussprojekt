import { useContext, useEffect, useState } from "react";
import "./List.scss";
import TopNav from "../../components/TopNav/TopNav";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import { backendUrl } from "../../api/api";
import { UserContext } from "../../contextes/UserContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  // Zustände
  const { user } = useContext(UserContext);
  const [wishlistData, setWishlistData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({}); // Zustand für ausgewählte Produkte
  const [cartUpdated, setCartUpdated] = useState(false); // Zustand zur Aktualisierung des Warenkorbs

  const handleAddToCart = async () => {
    const selectedItemsArray = Object.keys(selectedItems).filter(
      (index) => selectedItems[index]
    );
    console.log(selectedItemsArray);
    try {
      const response = await fetch(
        `${backendUrl}/api/v1/users/${user._id}/wishlist/moveToCart`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemIds: selectedItemsArray }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Setze cartUpdated auf true, um die Seite neu zu rendern
      setCartUpdated(true);
    } catch (error) {
      console.error("Error updating quantity:", error);
      // Behandeln Sie den Fehler entsprechend, z.B. Benachrichtigung des Benutzers
    }
  };

  // Effekt für das Abrufen der Wunschliste des Benutzers
  useEffect(() => {
    const fetchUserWishlist = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/v1/users/${user._id}/wishlist`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { status, data, error } = await response.json();
        if (status === "success") {
          console.log("Wishlistdata incoming", data.wishlist);
          setWishlistData(data.wishlist || []); // Stelle sicher, dass wishlistData ein Array ist
        } else {
          throw new Error(error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserWishlist();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup, if necessary
    };
  }, [cartUpdated]); // Überwachen Sie cartUpdated, um die Seite neu zu rendern, wenn der Warenkorb aktualisiert wurde

  // Handler für die Aktualisierung der Menge eines Elements
  const handleUpdateQuantity = async (index, newQuantity) => {
    try {
      const updatedWishlistItems = [...wishlistData]; // Eine Kopie der Wishlist-Elemente erstellen
      // console.log("=================", updatedWishlistItems);
      const inkrementedUpdatedWishlistItem = await updatedWishlistItems.find(
        (item) => item.productId === index
      ); // Die Menge des spezifischen Elements aktualisieren

      inkrementedUpdatedWishlistItem.quantity = newQuantity;

      console.log(inkrementedUpdatedWishlistItem);
      const requestBody = {
        wishlist: [inkrementedUpdatedWishlistItem], // Aktualisierte Wishlist-Daten senden
      };

      const response = await fetch(
        `${backendUrl}/api/v1/users/${user._id}/wishlist`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Wishlist-Daten lokal aktualisieren
      setWishlistData(updatedWishlistItems);
    } catch (error) {
      console.error("Error updating quantity:", error);
      // Fehlerbehandlung, z.B. Benachrichtigung des Benutzers
    }
  };

  // Handler für das Umschalten der Auswahl eines Elements
  const handleToggleSelection = (productId) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = { ...prevSelectedItems };
      if (updatedSelectedItems[productId]) {
        delete updatedSelectedItems[productId]; // Wenn das Element bereits ausgewählt ist, entfernen Sie es aus den ausgewählten Elementen
      } else {
        updatedSelectedItems[productId] = { quantity: 1 }; // Fügen Sie das Element mit einer Menge von 1 den ausgewählten Elementen hinzu
      }
      console.log(updatedSelectedItems);
      return updatedSelectedItems;
    });
  };

  // Handler für das Hinzufügen der ausgewählten Elemente zum Warenkorb

  return (
    <section className="list">
      <TopNav location="Wishlist" actionType="bin" onAddToCartClick={handleAddToCart}/>
      {wishlistData.length === 0 ? (
        <div className="empty-list">
          <img src="/empty-wishlist.svg" alt="heart icon" />
          <p>Your Wishlist is empty</p>
          <Link to="/home">
          <button className="total">Start Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          {wishlistData.map((wishlistItem) => (
            <ProductCardLarge
              key={wishlistItem.productId}
              item={wishlistItem}
              onUpdateQuantity={(newQuantity) =>
                handleUpdateQuantity(wishlistItem.productId, newQuantity)
              }
              onToggleSelection={() =>
                handleToggleSelection(wishlistItem.productId)
              } // Produkt-ID übergeben
              isSelected={selectedItems[wishlistItem.productId]} // Übergeben des Auswahlstatus
            />
          ))}
          <button className="total" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </>
      )}
    </section>
  );
};

export default Wishlist;