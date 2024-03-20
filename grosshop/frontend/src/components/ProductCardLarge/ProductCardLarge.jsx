import { useContext, useState } from "react";
import "./ProductCardLarge.scss";
import Counter from "../counter/Counter";
import { useLikeToggle } from "../../assets/helperFunctions/handleLikeClick";
import { UserContext } from "../../contextes/UserContext";

const ProductCardLarge = ({
  item,
  onUpdateQuantity,
  onToggleSelection,
  isSelected,
}) => {
  const { productName, quantity, productImage, price, rating, ratio } = item;
  const [count, setCount] = useState(quantity);
  const [likeSrc, handleLikeClick] = useLikeToggle();
  const { user, updateUser } = useContext(UserContext);

  const handleQuantityChange = (newQuantity) => {
    setCount(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  return (
    <article className={`product-card-large ${isSelected ? "selected" : ""}`}>
      <input
        type="checkbox"
        className="checkbox-round"
        checked={isSelected}
        onChange={() => onToggleSelection()}
      />
      <div className="product-img">
        <img src={productImage} alt="Produktbild" />
      </div>
      <section className="product-card-background">
        <div className="product-info">
          <h2>
            {productName.length > 13
              ? productName.slice(0, 13) + "..."
              : productName}
          </h2>
          <div className="product-amount">
            <p>{ratio[0].amount}</p>
            <p>
              {rating} <img src="./star.svg" alt="" />
            </p>
          </div>
          <div className="product-price">
            <h3>${price}</h3>
            <h3>${price}</h3>
            <img
              src={likeSrc}
              className="like"
              alt=""
              onClick={() => handleLikeClick(item, user)}
            />
          </div>
        </div>
        <Counter
          count={count}
          setCount={setCount}
          onQuantityChange={handleQuantityChange}
        />
      </section>
    </article>
  );
};

export default ProductCardLarge;
