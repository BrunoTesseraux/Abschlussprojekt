import { useState } from "react";
import "./ProductCardLarge.scss";
import Counter from "../counter/Counter";

const ProductCardLarge = ({ wishlistItem, onUpdateQuantity }) => {
    const { productName, quantity, productImage, price, rating, ratio } = wishlistItem;
    const [count, setCount] = useState(quantity);

    const handleQuantityChange = (newQuantity) => {
        setCount(newQuantity);
        onUpdateQuantity(newQuantity);
    };

    return (
        <article className="product-card-large">
            <input type="checkbox" className="checkbox-round" name="" id="" />
            <img src={productImage} alt="Produktbild" /> 
            <section className="product-card-background">
                <div className="product-info">
                    <h2>{productName}</h2>
                    <p>
                        {rating} <img src="./star.svg" alt="" /> 
                    </p>
                    <h3>${price}</h3> 
                </div>
                <Counter count={count} setCount={setCount} onQuantityChange={handleQuantityChange} />
            </section>
        </article>
    );
}

export default ProductCardLarge;