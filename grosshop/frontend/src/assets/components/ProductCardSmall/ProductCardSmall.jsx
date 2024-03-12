import { useState } from "react";
import "./ProductCardSmall.scss"

const ProductCardSmall  = () => {

    const [product, setProduct] = useState({
        productName: "Bavarian Beer",
        productImage: "/bier.jpg",
        price: 11.00,
        rating: 6,
        ratio: [{
            amount: 1,
            unit: "L"
        }],
        cuisine: "German",
        productType: "Beer"
    });

    return ( 
        <article className="product-card-small">
            <img src={product.productImage} alt="Produktbild" />
            <h2>{product.productName}</h2>
            <div>
            <h3>{product.price}$</h3>
            <p><img src="./star.svg" alt="" />{product.rating}</p>
            </div>
        </article> );
}
 
export default ProductCardSmall;