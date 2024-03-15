import { useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import TopNav from "../../components/TopNav/TopNav";
import "./List.scss"

const OrderList = () => {

    const [orderHistory, setOrderHistory] = useState([
        {
          _id: '61f4e67a0fbc941a89c91c1e',
          orders: {
            _id: '6041f0f14e1ff0362c6e70e1',
            userId: {
              _id: '602c4cc0f2ad5f000f7f18e1',
              username: 'exampleuser',
              email: 'user@example.com'
            },
            products: [
              {
                _id: '6041f0f14e1ff0362c6e70f1',
                name: 'Product 1',
                price: 10.99
              },
              {
                _id: '6041f0f14e1ff0362c6e70f2',
                name: 'Product 2',
                price: 15.99
              }
            ],
            shopId: '6033f0f14e1ff0362c6e70a1',
            orderStatus: 'shipped',
            paymentStatus: 'paied',
            orderNumber: 'ORD123456789',
            orderTimestamp: '2024-03-14T10:00:00Z',
            shippingAddress: '123 Main St, City, Country'
          },
          orderDate: '2024-03-14T10:00:00Z'
        },
        {
          _id: '61f4e67a0fbc941a89c91c1f',
          orders: {
            _id: '6041f0f14e1ff0362c6e70e2',
            userId: {
              _id: '602c4cc0f2ad5f000f7f18e2',
              username: 'anotheruser',
              email: 'anotheruser@example.com'
            },
            products: [
              {
                _id: '6041f0f14e1ff0362c6e70f3',
                name: 'Product 3',
                price: 20.99
              }
            ],
            shopId: '6033f0f14e1ff0362c6e70a1',
            orderStatus: 'pending',
            paymentStatus: 'pending',
            orderNumber: 'ORD987654321',
            orderTimestamp: '2024-03-13T09:30:00Z',
            shippingAddress: '456 Elm St, City, Country'
          },
          orderDate: '2024-03-13T09:30:00Z'
        }
      ]);
    

    return ( 
        <section className="list">
            <TopNav location="Order History"/>
        {orderHistory.map(order => (
                <OrderCard key={order._id} order={order} />
            ))}
    </section>
     );
}

export default OrderList;