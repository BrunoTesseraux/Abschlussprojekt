import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./ProductCardSmall.scss";
import { UserContext } from "../../contextes/UserContext"; // Keine Verwendung von UserContextProvider hier
import { handleLikeClick } from "../../assets/helperFunctions/handleLikeClick";


const ProductCardSmall = ({ product }) => {
    const { user } = useContext(UserContext);
    const [likeSrc, setLikeSrc] = useState("like.svg");

    useEffect(() => {
        if (user && user.wishlist) {
            const isInWishlist = user.wishlist.find(item => item.productId === product._id);
            if (isInWishlist) {
                setLikeSrc("/like2.svg");
            }
        }
    }, [user, user.wishlist, product._id]);

    const handleLike = () => {
        handleLikeClick(product, user, likeSrc, setLikeSrc);
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
                    onClick={handleLike}
                    />
            </div>
            <Link to={`/productdetail/${product._id}`}>
                <h2>{product.productName}</h2>
            </Link>
            <div className="price-rating">
                <h3>{product.price}$</h3>
                <p>
                    <img src="/star.svg" alt="" />
                    {product.rating}
                </p>
            </div>
        </article>
    );
};

export default ProductCardSmall;
