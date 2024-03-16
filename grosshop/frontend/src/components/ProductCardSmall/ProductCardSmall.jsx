import { useState } from "react";
import "./ProductCardSmall.scss";

const ProductCardSmall = ({ product }) => {
    const [likeSrc, setLikeSrc] = useState("/like.svg");

    const handleLikeClick = () => {
        if (likeSrc === "/like.svg") {
            setLikeSrc("/like2.svg");
        } else {
            setLikeSrc("/like.svg");
        }
    };

    return (
        <article className="product-card-small">
            <div className="pictures">
                <img src={product.productImage} alt="Produktbild" />
                <img
                    src={likeSrc}
                    className="like"
                    alt=""
                    onClick={handleLikeClick}
                />
            </div>
            <h2>{product.productName}</h2>
            <div className="price-rating">
                <h3>{product.price}$</h3>
                <p>
                    <img src="./star.svg" alt="" />
                    {product.rating}
                </p>
            </div>
        </article>
    );
};

export default ProductCardSmall;