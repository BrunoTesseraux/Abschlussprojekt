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
        <input type="checkbox" className="checkbox-round" name="" id="" />
        <img src={product.productImage} alt="Produktbild" />
        <section className="product-card-background">
        <div className="product-info">
        <h2>{product.productName}</h2>
        <p> {product.ratio.map((item, index) => (
              <span key={index}>{item.amount}{item.unit}</span>
            ))}<img src="./star.svg" alt="" />{product.rating}</p>
        <h3>${product.price}</h3>
        </div>
        <Counter count={count} setCount={setCount} />
        </section>
    </article>);
}
 
export default ProducrCardLarge;