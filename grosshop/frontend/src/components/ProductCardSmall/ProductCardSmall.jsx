import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./ProductCardSmall.scss";
import { UserContext } from "../../contextes/UserContext";
import { handleLikeClick } from "../../assets/helperFunctions/handleLikeClick";

const ProductCardSmall = ({ product }) => {
    const { user } = useContext(UserContext);
    const [likeSrc, setLikeSrc] = useState("like.svg");

    // Funktion zum Umformulieren des Produkts, falls erforderlich
    const reformatProduct = (product) => {
        if (product.productId) {
            return product.productId; // Wenn das Produkt bereits in der erwarteten Form vorliegt, gib es einfach zurück
        } else {
            return product; // Andernfalls geben Sie das Produkt unverändert zurück
        }
    };

    const formattedProduct = reformatProduct(product);

    useEffect(() => {
        if (user && user.wishlist) {
            const isInWishlist = user.wishlist.find(item => item.productId === formattedProduct._id);
            if (isInWishlist) {
                setLikeSrc("/like2.svg");
            }
        }
    }, [user, user.wishlist, formattedProduct._id]);

    const handleLike = () => {
        handleLikeClick(formattedProduct, user, likeSrc, setLikeSrc); // Verwenden Sie das umformatierte Produkt
    };

    return (
        <article className="product-card-small">
            <div className="pictures">
                <Link to={`/productdetail/${formattedProduct._id}`}>
                    <img src={formattedProduct.productImage} alt="Produktbild" />
                </Link>
                <img
                    src={likeSrc}
                    className="like"
                    alt=""
                    onClick={handleLike}
                />
            </div>
            <Link to={`/productdetail/${formattedProduct._id}`}>
                <h2>{formattedProduct.productName}</h2>
            </Link>
            <div className="price-rating">
                <h3>$ {formattedProduct.price}</h3>
            </div>
        </article>
    );
};

export default ProductCardSmall;