import { useContext } from "react";
import "./ProductCardSmall.scss";
import { useLikeToggle } from "../../assets/helperFunctions/handleLikeClick";
import { UserContext } from "../../contextes/UserContext"; // Keine Verwendung von UserContextProvider hier

const ProductCardSmall = ({ product }) => {
    const [likeSrc, handleLikeClick] = useLikeToggle();
    const { user, updateUser } = useContext(UserContext);


    return (
        <article className="product-card-small">
            <div className="pictures">
                <img src={product.productImage} alt="Produktbild" />
                <img
                    src={likeSrc}
                    className="like"
                    alt=""
                    onClick={() => handleLikeClick(product, user)}
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