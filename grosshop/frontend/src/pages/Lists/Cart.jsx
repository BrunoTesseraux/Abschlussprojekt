import { useContext, useEffect, useState } from "react";
import "./List.scss";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import TopNav from "../../components/TopNav/TopNav";
import { backendUrl } from "../../api/api";
import { UserContext } from "../../contextes/UserContext";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useContext(UserContext);

console.log(user);
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, cartItem) => {
            return total + (cartItem.product.price * cartItem.quantity);
        }, 0);
    };

    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

    const handleUpdateQuantity = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        setTotalPrice(calculateTotalPrice());
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendUrl}/api/v1/users/${user._id}/cart`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const { status, data, error } = await response.json();
                if (status !== "success") throw new Error(error);
                else setCartItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function (optional)
        return () => {
            // Perform cleanup, if necessary
        };
    }, [user._id]);


    return (
        <section className="list">
            <TopNav location="My Cart" actionType="bin"/>
            {cartItems.length === 0 ? (

                <div className="empty-list">
                    <img src="/empty-cart.svg" alt="cart icon" />
                    <p>Your Cart is empty</p>
                    <button className="total">Start Shopping</button>
                </div>

            ) : (
                <>
                    {cartItems.map((cartItem, index) => (
                    <ProductCardLarge key={index} cartItem={cartItem} onUpdateQuantity={(newQuantity) => handleUpdateQuantity(index, newQuantity)} />                      
                    ))}
                    <button className="total">Total: ${totalPrice.toFixed(2)}</button>
                </>
            )}
        </section>

    );
}

export default Cart;