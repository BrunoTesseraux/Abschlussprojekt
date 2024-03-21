import { useContext, useState } from "react";
import "./ProductCardLarge.scss";
import Counter from "../counter/Counter";
import { UserContext } from "../../contextes/UserContext";
import { handleLikeClick } from "../../assets/helperFunctions/handleLikeClick";
import { Link } from "react-router-dom";

const ProductCardLarge = ({
  item,
  onUpdateQuantity,
  onToggleSelection,
  isSelected,
}) => {
  const { productId, productName, quantity, productImage, price, rating, ratio } = item;
  const [count, setCount] = useState(quantity);
  const [likeSrc, setLikeSrc] = useState("like.svg"); // State for like button
  const { user } = useContext(UserContext);
console.log(item);
  const handleQuantityChange = (newQuantity) => {
    setCount(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const handleLike = () => {
    // Toggle like button and update state
    handleLikeClick(item, user, likeSrc, setLikeSrc);
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
        <Link to={`/productdetail/${productId}`}>
          <img src={productImage} alt="Produktbild" />
        </Link>
      </div>
      <section className="product-card-background">
        <div className="product-info">
        <Link to={`/productdetail/${productId}`}>
          <h2>
            {productName.length > 13
              ? productName.slice(0, 13) + "..."
              : productName}
          </h2>
          </Link>
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
              onClick={handleLike} // Handle like button click
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