import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api.js"; // Stelle sicher, dass backendUrl richtig importiert ist

import "./ProductDetail.scss";
import Counter from "../../components/counter/Counter";
import TopNav from "../../components/TopNav/TopNav";

const ProductDetail = () => {
    const { productId } = useParams(); // Produkt-ID aus der URL-Parameter erhalten
    const [product, setProduct] = useState(null); // Zustand für das Produkt
    const [count, setCount] = useState(1); // Zustand für die Anzahl der Produkte im Warenkorb

    // useEffect-Hook verwenden, um die Produktinformationen zu fetchen
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendUrl}/api/v1/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productData = await response.json();
                setProduct(productData.data.product);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
    
        fetchData();
    
        // Cleanup function (optional)
        return () => {
            // Perform cleanup, if necessary
        };
    }, [productId]); // Füge productId als Abhängigkeit hinzu, um das Fetchen bei Änderungen zu aktualisieren

    // Wenn das Produkt noch geladen wird, zeige "Loading..." an
    if (!product) {
        return <div>Loading...</div>;
    }

    // Produktinformationen aus dem State extrahieren
    const { productName, productImage, price, rating, ratio } = product;

    // Berechnung des Gesamtpreises basierend auf der Anzahl der Produkte
    const totalPrice = (price * count).toFixed(2);

    return ( 
        <div className="item-details">
            <TopNav location="Item Details"/>
            <img src={productImage} alt="Produktbild" className="product-picture" />
            <span className="unit-highlight">{ratio[0].amount} {ratio[0].unit}</span>
            <h1>$ {price.toFixed(2)}</h1>
            <h3>{productName}</h3>
            <h2><img src="/star.svg" alt="Star" className="star"/>{rating}/5</h2>
            <div className="divider"></div>
            <h2>Quantity</h2>
            <Counter count={count} setCount={setCount} />
            <h2>Total Price: $ {totalPrice}</h2>
            <img src="/cart.svg" alt="Cart icon" className="cart-icon product-picture" />
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
