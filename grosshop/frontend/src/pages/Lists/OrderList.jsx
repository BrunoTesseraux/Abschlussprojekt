import { useContext, useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import TopNav from "../../components/TopNav/TopNav";
import "./List.scss";
import { UserContext } from "../../contextes/UserContext";
import { backendUrl } from "../../api/api";

const OrderList = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const { user } = useContext(UserContext);


  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/v1/users/${user._id}/orderHistory`
          );
          if (!response.ok) {
            console.log("hallo");
            throw new Error("Network response was not ok");
          }
          const { data } = await response.json();
          console.log("========" + data);
          setOrderHistory(data);
        } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    fetchOrderHistory();
  }, []);
  
  console.log(orderHistory);

  return (
    <section className="list">
      <TopNav location="Order History" />
      {orderHistory.length === 0 ? (
         <div className="empty-list">
         <img src="/empty-cart.svg" alt="cart icon" />
         <p>No Orders yet</p>
         <button className="total">Start Shopping</button>
     </div>
      ) : (
        orderHistory.orderHistory.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))
      )}
    </section>
  );
};

export default OrderList;
