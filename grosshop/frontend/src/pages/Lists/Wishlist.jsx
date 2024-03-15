import { useState } from "react";
import "./List.scss"
import TopNav from "../../components/TopNav/TopNav";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";

const Wishlist = () => {

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
                "price": 15.00,
                "rating": 8,
                "cuisine": "Italian",
                "productType": "Food"
                // Weitere Produktinformationen...
            },
            "quantity": 3 // Beispielanzahl im Warenkorb
        },
        // Weitere Einträge im Warenkorb...
    ]);

    return ( 

        <section className="list">
        <TopNav location="Wishlist" withBinIcon={true}/>
        {cartItems.length === 0 ? (

            <div className="empty-list">
                <img src="/empty-wishlist.svg" alt="heart icon" />
                <p>Your Wishlist is empty</p>
                <button className="total">Start Shopping</button>
            </div>

        ) : (
            <>
                {cartItems.map((cartItem, index) => (
                    <ProductCardLarge key={index} cartItem={cartItem} />
                ))}
                <button className="total">Add to Cart</button>
            </>
        )}
    </section>

     );
}
 
export default Wishlist;