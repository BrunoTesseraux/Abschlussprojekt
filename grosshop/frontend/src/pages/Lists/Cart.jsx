import { useState } from "react";
import "./List.scss";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import TopNav from "../../components/TopNav/TopNav";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            "_id": "60953e3b0b02ff3a44e96104", // Beispiel-Objekt-ID des Eintrags im Warenkorb
            "product": {
                "_id": "60953e3b0b02ff3a44e96105", // Beispiel-Objekt-ID des Produkts
                "name": "Bavarian Beer",
                "image": "/bier.jpg",
                "price": 11.00,
                "rating": 6,
                "cuisine": "German",
                "productType": "Beer"
                // Weitere Produktinformationen...
            },
            "quantity": 2 // Beispielanzahl im Warenkorb
        },
        {
            "_id": "60953e3b0b02ff3a44e96104", // Beispiel-Objekt-ID des Eintrags im Warenkorb
            "product": {
                "_id": "60953e3b0b02ff3a44e96106", // Beispiel-Objekt-ID des Produkts
                "name": "Another Product",
                "image": "/bier.jpg",
                "price": 12.79,
                "rating": 8,
                "cuisine": "Italian",
                "productType": "Food"
                // Weitere Produktinformationen...
            },
            "quantity": 3 // Beispielanzahl im Warenkorb
        },
        // Weitere Einträge im Warenkorb...
    ]);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, cartItem) => {
            return total + (cartItem.product.price * cartItem.quantity);
        }, 0);
    };

    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

    const handleUpdateQuantity = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        setTotalPrice(calculateTotalPrice());
    };

    return (
        <section className="list">
            <TopNav location="My Cart" withBinIcon={true}/>
            {cartItems.length === 0 ? (

                <div className="empty-list">
                    <img src="/empty-cart.svg" alt="cart icon" />
                    <p>Your Cart is empty</p>
                    <button className="total">Start Shopping</button>
                </div>

            ) : (
                <>
                    {cartItems.map((cartItem, index) => (
                    <ProductCardLarge key={index} cartItem={cartItem} onUpdateQuantity={(newQuantity) => handleUpdateQuantity(index, newQuantity)} />                      ))}
                    <button className="total">Total: ${totalPrice.toFixed(2)}</button>
                </>
            )}
        </section>

    );
}

export default Cart;