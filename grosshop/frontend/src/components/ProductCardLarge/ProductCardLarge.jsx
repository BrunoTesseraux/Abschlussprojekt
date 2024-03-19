import { useState } from "react";
import "./ProductCardLarge.scss";
import Counter from "../counter/Counter";

const ProductCardLarge = ({ item, onUpdateQuantity, onToggleSelection, isSelected }) => {
  const { productName, quantity, productImage, price, rating, ratio } =
    item;
  const [count, setCount] = useState(quantity);

  const handleQuantityChange = (newQuantity) => {
    setCount(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  
   return (
    <article className={`product-card-large ${isSelected ? 'selected' : ''}`}>
    <input 
      type="checkbox" 
      className="checkbox-round" 
      checked={isSelected} 
      onChange={() => onToggleSelection()} 
    />
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

