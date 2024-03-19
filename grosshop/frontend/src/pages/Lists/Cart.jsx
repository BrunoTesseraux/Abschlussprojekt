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
        const updatedSelectedItems = [...selectedItems];
        updatedSelectedItems[index] = !selectedItems[index];
        setSelectedItems(updatedSelectedItems);
        const updatedSelectedProducts = createSelectedProductsObject(cartItems, updatedSelectedItems);
        setSelectedProducts(updatedSelectedProducts);
    };

    const createSelectedProductsObject = (cartItems, selectedItems) => {
        const selectedProducts = {};
        cartItems.forEach((cartItem, index) => {
            if (selectedItems[index]) {
            selectedProducts[cartItem.productId] = {quantity: cartItem.quantity};
            }
        });
        return selectedProducts;
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, cartItem, index) => {
            // Überprüfen, ob cartItem ein vollständiges Produktobjekt hat
            if (cartItem.product && cartItem.product.price) {
                return selectedItems[index] ? total + (cartItem.product.price * cartItem.quantity) : total;
            }
            // Wenn kein vollständiges Produktobjekt vorhanden ist, direkt auf den Preis zugreifen
            return selectedItems[index] ? total + (cartItem.price * cartItem.quantity) : total;
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
        console.log('Sending request with body:', requestBody);
        const response = await fetch(`${backendUrl}/api/v1/users/${user._id}/cart`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error updating quantity:', error);
        // Behandeln Sie den Fehler entsprechend, z.B. Benachrichtigung des Benutzers
    }
};

const handleDeleteSelectedProducts = async () => {
    // Filtern der ausgewählten Produkte aus dem Warenkorb
    const updatedCartItems = cartItems.filter((item, index) => !selectedItems[index]);

    // Senden eines PATCH-Requests, um den Warenkorb im Backend zu aktualisieren
    try {
        const response = await fetch(`${backendUrl}/api/v1/users/${user._id}/cart`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart: updatedCartItems }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Aktualisieren des lokalen Zustands mit den aktualisierten Warenkorbartikeln
        setCartItems(updatedCartItems);
    } catch (error) {
        console.error('Error deleting selected products:', error);
        // Fehlerbehandlung
    }
};

const handlePaySelectedProducts = async () => {
    // Erstellen einer Bestellung mit den ausgewählten Produkten
    const order = {
        userId: user._id,
        products: cartItems.filter((item, index) => selectedItems[index]).map(item => ({
            productId: item.productId,
            quantity: item.quantity,
        })),
        shopId: 54353534533, // Ihre Shop-ID hier einfügen
        orderStatus: "pending",
        paymentStatus: "pending",
        orderNumber: "ORD123456", // Ihre Bestellnummer hier einfügen
        orderTimestamp: "2019-03-11", // Das Bestelldatum hier einfügen
        shippingAdress: "123 Example Street, City, Country" // Die Lieferadresse hier einfügen
    };

    // Senden eines POST-Requests, um die Bestellung zu erstellen
    try {
        const response = await fetch(`${backendUrl}/api/v1/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Nach erfolgreicher Bestellung die ausgewählten Artikel aus dem Warenkorb entfernen
        setSelectedItems(selectedItems.map(() => false));
        setCartItems(cartItems.filter((item, index) => !selectedItems[index]));
    } catch (error) {
        console.error('Error creating order:', error);
        // Fehlerbehandlung
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
                            onUpdateQuantity={(newQuantity) => handleUpdateQuantity(index, newQuantity)}
                            onToggleSelection={() => handleToggleSelection(index)} // Hinzufügen des Handlers für die Auswahl
                            isSelected={selectedItems[index]} // Übergeben des Auswahlstatus
                        />
                    ))}
                    <button className="total" onClick={handlePaySelectedProducts}>Total: ${totalPrice.toFixed(2)}</button>
                    <button onClick={handleDeleteSelectedProducts}>blub</button>
                </>
            )}
        </section>
    );
}

export default Cart;