import { useContext, useEffect, useState } from "react";
import "./List.scss";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import TopNav from "../../components/TopNav/TopNav";
import { UserContext } from "../../contextes/UserContext";
import { backendUrl } from "../../api/api";

const Cart = () => {
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); // Zustand für ausgewählte Produkte
  const [selectedProducts, setSelectedProducts] = useState({}); // Objekt für ausgewählte Produkte mit Mengen

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const response = await fetch(
          backendUrl + `/api/v1/users/${user._id}/cart`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { status, data, error } = await response.json();
        if (status !== "success") throw new Error(error);
        else console.log("Cartdata incomming", data.cart);
        setCartItems(data.cart);
        setSelectedItems(new Array(data.cart.length).fill(false)); // Initialisierung der Auswahl mit `false`
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserCart();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup, if necessary
    };
  }, []);

  const handleToggleSelection = (index) => {
    console.log(index);
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[index] = !selectedItems[index];
    setSelectedItems(updatedSelectedItems);
    const updatedSelectedProducts = createSelectedProductsObject(
      cartItems,
      updatedSelectedItems
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const createSelectedProductsObject = (cartItems, selectedItems) => {
    const selectedProducts = {};
    cartItems.forEach((cartItem, index) => {
      if (selectedItems[index]) {
        selectedProducts[cartItem.productId] = { quantity: cartItem.quantity };
      }
    });
    return selectedProducts;
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, cartItem, index) => {
      // Überprüfen, ob cartItem ein vollständiges Produktobjekt hat
      if (cartItem.product && cartItem.product.price) {
        return selectedItems[index]
          ? total + cartItem.product.price * cartItem.quantity
          : total;
      }
      // Wenn kein vollständiges Produktobjekt vorhanden ist, direkt auf den Preis zugreifen
      return selectedItems[index]
        ? total + cartItem.price * cartItem.quantity
        : total;
    }, 0);
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartItems, selectedItems]); // Überwachen von `selectedItems` für Preisaktualisierungen

  const handleUpdateQuantity = async (index, newQuantity) => {
    try {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
      setTotalPrice(calculateTotalPrice());

      // Erstellen Sie das aktualisierte Objekt für den Patch-Request
      const updatedCartItem = updatedCartItems[index];

      const requestBody = {
        cart: [
          {
            productId: updatedCartItem.productId,
            quantity: newQuantity,
            inCart: true,
          },
        ],
      };
      console.log("Sending request with body:", requestBody);
      const response = await fetch(
        `${backendUrl}/api/v1/users/${user._id}/cart`,
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
    } catch (error) {
      console.error("Error updating quantity:", error);
      // Behandeln Sie den Fehler entsprechend, z.B. Benachrichtigung des Benutzers
    }
  };

  const handleRemoveSelectedItems = async () => {
    const selectedProductIds = cartItems
      .filter((_, index) => selectedItems[index])
      .map((item) => item.productId);
    console.log("=========================", selectedItems);
    // Sende eine Anfrage an das Backend, um die ausgewählten Produkte zu entfernen
    try {
      const response = await fetch(
        `${backendUrl}/api/v1/users/${user._id}/cart/remove`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productIds: selectedProductIds }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        // Aktualisiere den Warenkorb im Frontend, um die entfernten Produkte zu reflektieren
        setCartItems(
          cartItems.filter(
            (item) => !selectedProductIds.includes(item.productId)
          )
        );
        setSelectedItems(
          selectedItems.filter(
            (_, index) =>
              !selectedProductIds.includes(cartItems[index].productId)
          )
        );
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(
        "Fehler beim Entfernen von Produkten aus dem Warenkorb:",
        error
      );
    }
  };

  return (
    <section className="list">
      <TopNav location="My Cart" actionType="bin" />
      {cartItems.length === 0 ? (
        <div className="empty-list">
          <img src="/empty-cart.svg" alt="cart icon" />
          <p>Your Cart is empty</p>
          <button className="total">Start Shopping</button>
        </div>
      ) : (
        <>
          {cartItems.map((cartItem, index) => (
            <ProductCardLarge
              key={index}
              item={cartItem}
              onUpdateQuantity={(newQuantity) =>
                handleUpdateQuantity(index, newQuantity)
              }
              onToggleSelection={() => handleToggleSelection(index)} // Hinzufügen des Handlers für die Auswahl
              isSelected={selectedItems[index]} // Übergeben des Auswahlstatus
            />
          ))}
          <button className="total" onClick={handleRemoveSelectedItems}>
            Total: ${totalPrice.toFixed(2)}
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;
