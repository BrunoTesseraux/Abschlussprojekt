import { useContext, useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import TopNav from "../../components/TopNav/TopNav";
import "./List.scss";
import { UserContext } from "../../contextes/UserContext";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";
import { useOrder } from "../../contextes/OderContext";

const OrderList = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const { user } = useContext(UserContext);
  const { order, setOrder } = useOrder();

console.log(order);
  // useEffect(() => {
  //   const fetchOrderHistory = async () => {
  //     try {
  //       const response = await fetch(
  //         `${backendUrl}/api/v1/users/${user._id}/orderHistory`
  //         );
  //         if (!response.ok) {
  //           console.log("hallo");
  //           throw new Error("Network response was not ok");
  //         }
  //         const { data } = await response.json();
  //         console.log("========" + data);
  //         setOrderHistory(data);
  //       } catch (error) {
  //       console.error("Error fetching order history:", error);
  //     }
  //   };

  //   fetchOrderHistory();
  // }, []);
  
  // console.log(orderHistory);

  return (
    <section className="list">
      <TopNav location="Order History" />
      {order.length === 0 ? (
         <div className="empty-list">
         <img src="/empty-cart.svg" alt="cart icon" />
         <p>No Orders yet</p>
         <Link to="/home">
          <button className="total">Start Shopping</button>
          </Link>
     </div>
      ) : (

          <OrderCard order={order} />

      )}
    </section>
  );
};

export default OrderList;
