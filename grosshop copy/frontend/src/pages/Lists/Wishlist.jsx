import { useContext, useEffect, useState } from "react";
import "./List.scss";
import TopNav from "../../components/TopNav/TopNav";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import { backendUrl } from "../../api/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contextes/UserContext";

const Wishlist = () => {
  const { user } = useContext(UserContext);
  const [wishlistData, setWishlistData] = useState({
    productId: "",
    quantity: 3,
    inWishlist: true,
  });
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleUpdateQuantity = async () => {
    try {
      const res = await fetch(
        backendUrl + `/api/v1/users/${user._id}/wishlist`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ wishlist: wishlistData }),
        }
      );
      const { status, data, error } = await res.json();
      if (status !== "success") throw new Error(error);
      else console.log("Responst wishlist data success:", data.wishlist);
      // setWishlistData(data.wishlist);
      //   setCount(newQuantity);
      //   onUpdateQuantity(newQuantity);
    } catch (error) {
      console.error("Wishlist not updated");
    }
  };
  console.log(wishlistData);
  useEffect(() => {
    const fetchUserWishlist = async () => {
      try {
        const response = await fetch(
          backendUrl + `/api/v1/users/${user._id}/wishlist`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { status, data, error } = await response.json();
        if (status !== "success") throw new Error(error);
        else console.log("Whishlistdata incomming", data.wishlist);
        setWishlistItems(data.wishlist);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserWishlist();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup, if necessary
    };
  }, []);


  return (
    <section className="list">
      <TopNav location="Wishlist" actionType="bin" />
      {wishlistItems.length === 0 ? (
        <div className="empty-list">
          <img src="/empty-wishlist.svg" alt="heart icon" />
          <p>Your Wishlist is empty</p>
          <button className="total">Start Shopping</button>
        </div>
      ) : (
        <>
          {wishlistItems.map((wishlistItem, index) => (
            <ProductCardLarge
              key={index}

              item={wishlistItem}

              onUpdateQuantity={(newQuantity) =>
                handleUpdateQuantity(newQuantity)
              }
            />
          ))}
          <button className="total">Add to Cart</button>
        </>
      )}
    </section>
  );
};

export default Wishlist;
