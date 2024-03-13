import { useState } from "react";

import "./ProductDetail.scss";
import Counter from "../../components/counter/Counter";

const ProductDetail = () => {
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
    const [count, setCount] = useState(1);

    const totalPrice = (product.price * count).toFixed(2);

    return ( 
        <div className="item-details">
            <>
                <img src={product.productImage} alt="Produktbild" />
                <span className="unit-highlight">{product.ratio[0].amount} {product.ratio[0].unit}</span>
                <h1>$ {product.price.toFixed(2)}</h1>
                <h3>{product.productName}</h3>
                <h2><img src="/star.svg" alt="Star" className="star"/>{product.rating}/5</h2>
                <div className="divider"></div>
                <h2>Quantity</h2>
                <Counter count={count} setCount={setCount} />
                <h2>Total Price: $ {totalPrice}</h2>
                <img src="/cart.svg" alt="Cart icon" className="cart-icon" />
                <button className="add-to-cart">Add to Cart</button>
            </>
        </div>
    );
};

export default ProductDetail;