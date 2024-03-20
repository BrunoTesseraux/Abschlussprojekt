import { useState } from "react";
import { Link } from "react-router-dom";
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
                <Link to={`/productdetail/${product._id}`}>
                    <img src={product.productImage} alt="Produktbild" />
                </Link>
                <img
                    src={likeSrc}
                    className="like"
                    alt=""
                    onClick={handleLikeClick}
                />
            </div>
            <Link to={`/productdetail/${product._id}`}>
                <h2>{product.productName}</h2>
            </Link>
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
