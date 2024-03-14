import { useState } from 'react';
import "./OrderCard.scss";

const OrderCard = () => {
    const [order, setOrder] = useState({
        userId: "609b0e9c7d6bbd471dd94629", 
        products: [
            { 
                product: {
                    _id: "6066d38393a30e4f53f05b19", 
                    name: "Beispielprodukt 1",
                    price: 10.99,
                    description: "Dies ist ein Beispielprodukt 1."
                }, 
                quantity: 2 
            },
            { 
                product: {
                    _id: "6066d38393a30e4f53f05b1a", 
                    name: "Beispielprodukt 2",
                    price: 15.99,
                    description: "Dies ist ein Beispielprodukt 2."
                }, 
                quantity: 1 
            },
            { 
                product: {
                    _id: "6066d38393a30e4f53f05b1b", 
                    name: "Beispielprodukt 3",
                    price: 19.99,
                    description: "Dies ist ein Beispielprodukt 3."
                }, 
                quantity: 3 
            }
        ],
        shopId: "6066d38393a30e4f53f05b1c", 
        orderStatus: "shipped", 
        paymentStatus: "payed", 
        orderNumber: "ORD123456", 
        orderTimestamp: new Date(), 
        shippingAdress: "123 Example Street, City, Country" 
    });

    let totalPrice = 0;
    order.products.forEach(item => {
        totalPrice += item.product.price * item.quantity;
    });

    const formattedDateTime = order.orderTimestamp.toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });

    return (
        <div className="order-card">
            <section className="left">
                <div className='order-number'>{order.orderNumber}</div>
                <div className='total-price'>${totalPrice.toFixed(2)}</div>
            </section>
            <section className="right">
                <div>
                <span className={`status ${order.orderStatus.toLowerCase()}`}>{order.orderStatus}</span>
                <span className={`status ${order.paymentStatus.toLowerCase()}`}>{order.paymentStatus}</span>
                </div>
                <div className='date'>{formattedDateTime}</div>
            </section>
        </div>
    );
};

export default OrderCard;