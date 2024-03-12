import React, { useState } from "react";
import "./ItemDetail.scss";

const ItemDetail = () => {
    const [count, setCount] = useState(1);

    const addOne = () => {
        setCount(count + 1);
    };

    const minusOne = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return ( 
        <div className="item-details">
            <img src="/bier.jpg" alt="Produktbild" />
            <span className="unit-highlight">1 L</span>
            <h1>$ 11.00</h1>
            <h3>Bavarian Beer </h3>
            <h2><img src="/star.svg" alt="Star" className="star"/>5/5 (6Bn revievs)</h2>
            <div className="divider"></div>
            <h2>Quantity</h2>
            <div className="quantity">
                <button onClick={minusOne}>-</button>
                <p>{count} <span>L</span></p>
                <button onClick={addOne}>+</button>
            </div>
            <img src="/cart.svg" alt="Cart icon" className="cart-icon" />
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ItemDetail;