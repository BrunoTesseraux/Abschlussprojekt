import { useState } from "react";
import "./ProductCardLarge.scss";
import Counter from "../counter/Counter";

const ProductCardLarge = ({ cartItem, onUpdateQuantity }) => {
    const { product, quantity } = cartItem;
    const [count, setCount] = useState(quantity);

    const handleQuantityChange = (newQuantity) => {
        setCount(newQuantity);
        onUpdateQuantity(newQuantity);
    };

    return (
        <article className="product-card-large">
            <input type="checkbox" className="checkbox-round" name="" id="" />
            <img src={product.image} alt="Produktbild" /> 
            <section className="product-card-background">
                <div className="product-info">
                    <h2>{product.name}</h2> 
                    <p>
                        {product.rating} <img src="./star.svg" alt="" /> 
                    </p>
                    <h3>${product.price}</h3> 
                </div>
                <Counter count={count} setCount={setCount} onQuantityChange={handleQuantityChange} />
            </section>
        </article>
    );
}

export default ProductCardLarge;