import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api.js"; 

import "./ProductDetail.scss";
import Counter from "../../components/counter/Counter";
import TopNav from "../../components/TopNav/TopNav";
import { UserContext } from "../../contextes/UserContext.jsx";

const ProductDetail = () => {
    const { productId } = useParams(); 
    const { user } = useContext(UserContext); // Zugriff auf den UserContext
    const [product, setProduct] = useState(null); 
    const [count, setCount] = useState(1); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendUrl}/api/v1/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productData = await response.json();
                setProduct(productData.data.product);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product data:', error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, [productId]); 

    const handleAddToCart = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/v1/users/${user._id}/cart`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart: [{
                        productId: productId,
                        quantity: count,
                        inCart: true
                    }]
                })
            });
            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }
            // Handle success response here, e.g., show a success message
        } catch (error) {
            console.error('Error adding item to cart:', error);
            // Handle error here, e.g., show an error message to the user
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const { productName, productImage, price, rating, ratio } = product;

    const totalPrice = (price * count).toFixed(2);

    const productDetailClass = productName === "Tomatoes" ? "item-details tomatoes-background" : "item-details";

    return ( 
        <div className={productDetailClass}>
            <TopNav location="Item Details"/>
            <img src={productImage} alt="Product" className="product-picture" />
            <span className="unit-highlight">{ratio[0].amount} {ratio[0].unit}</span>
            <h1>$ {price.toFixed(2)}</h1>
            <h3>{productName}</h3>
            <h2><img src="/star.svg" alt="Star" className="star"/>{rating.rate}/5 {rating.reviews} reviews</h2>
            <div className="divider"></div>
            <h2>Quantity</h2>
            <Counter count={count} setCount={setCount} />
            <h2>Total Price: $ {totalPrice}</h2>
            <img src="/cart.svg" alt="Cart icon" className="cart-icon product-picture" />
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;