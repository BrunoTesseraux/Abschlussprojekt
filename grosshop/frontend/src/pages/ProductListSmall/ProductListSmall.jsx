import { useState } from "react";
import ProductCardSmall from "../../components/ProductCardSmall/ProductCardSmall";
import "./ProductListSmall.scss";
import TopNav from "../../components/TopNav/TopNav";

const ProductListSmall = ({ maxProducts }) => {
    const [products, setProducts] = useState([
        {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        }, {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        }, {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        },  {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        }, {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        }, {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        },  {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        }, {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        }, {
            _id: "60953e3b0b02ff3a44e96101",
            productName: "Bavarian Beer",
            productImage: "/bier.jpg",
            price: 11.00,
            rating: 6,
            ratio: [
                { amount: 500, unit: "ml" },
                { amount: 330, unit: "ml" }
            ],
            cuisine: "German",
            category: "Beer"
        },
        {
            _id: "60953e3b0b02ff3a44e96102",
            productName: "Italian Pizza",
            productImage: "/bier.jpg",
            price: 15.00,
            rating: 8,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "Italian",
            category: "Food"
        },
        {
            _id: "60953e3b0b02ff3a44e96103",
            productName: "French Croissant",
            productImage: "/bier.jpg",
            price: 5.00,
            rating: 7,
            ratio: [
                { amount: 1, unit: "piece" }
            ],
            cuisine: "French",
            category: "Bakery"
        },
    ]);


    return (
        <section className="product-list-small">
        {products.slice(0, maxProducts).map((product, index) => {
            index++; // Zähler inkrementieren

            // Überprüfen, ob der Index durch 10 teilbar ist und ob es nicht das letzte Produkt ist
            if (index % 10 === 0 && index !== maxProducts) {
                return (
                    <img key={`img-${index}`} src="/bread.png" className="separation-picture" alt="Additional Image" />
                );
            } else {
                return <ProductCardSmall key={product._id} product={product} />;
            }
        })}
    </section>
    );
};

export default ProductListSmall;