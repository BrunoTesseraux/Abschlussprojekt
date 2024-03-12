import { useState } from "react";
import "./ProducrCardLarge.scss"
import Counter from "../counter/Counter";

const ProducrCardLarge = () => {

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

    return ( 
        <article className="product-card-large">
        <input type="checkbox" name="" id="" />
        <img src={product.productImage} alt="Produktbild" />
        <div>
        <h2>{product.productName}</h2>
        <h3>{product.price}$</h3>
        <p><img src="./star.svg" alt="" />{product.rating}</p>
        </div>
        <Counter count={count} setCount={setCount} />
    </article>);
}
 
export default ProducrCardLarge;