import { useContext, useEffect, useState } from "react";
import "./List.scss"
import TopNav from "../../components/TopNav/TopNav";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import { backendUrl } from "../../api/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contextes/UserContext";

const Wishlist = () => {

    const { user } = useContext(UserContext);

    const [wishlistItems, setWishlistItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(backendUrl + `/api/v1/users/${user._id}/wishlist`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const { status, data, error } = await response.json();
            if (status !== "success") throw new Error(error);
            else console.log("Whishlistdata incomming", data.wishlist);
            setWishlistItems(data.wishlist);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        const fetchProducts = async () => {
            try {
              const response = await fetch(backendUrl + "/api/v1/products");
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const { status, data, error } = await response.json();
              if (status !== "success") throw new Error(error);
              else console.log("Whishlistdata incomming", data.wishlist);
              setWishlistItems(data.wishlist);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
    
        fetchUser();
        fetchProducts();
    
        // Cleanup function (optional)
        return () => {
          // Perform cleanup, if necessary
        };
      }, []);

    return ( 

        <section className="list">
        <TopNav location="Wishlist" actionType="bin"/>
        {cartItems.length === 0 ? (

            <div className="empty-list">
                <img src="/empty-wishlist.svg" alt="heart icon" />
                <p>Your Wishlist is empty</p>
                <button className="total">Start Shopping</button>
            </div>

        ) : (
            <>
                {cartItems.map((cartItem, index) => (
                    <ProductCardLarge key={index} cartItem={cartItem} />
                ))}
                <button className="total">Add to Cart</button>
            </>
        )}
    </section>

     );
}
 
export default Wishlist;