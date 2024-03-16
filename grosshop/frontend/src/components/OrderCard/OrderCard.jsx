import "./OrderCard.scss";

const OrderCard = ({ order }) => {
    let totalPrice = 0;
    order.orders.products.forEach(item => {
        totalPrice += item.price;
    });

    const formattedDateTime = new Date(order.orderDate).toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });

    return (
        <div className="order-card">
            <section className="order-section left">
                <div className='order-number'>{order.orders.orderNumber}</div>
                <div className='total-price'>${totalPrice.toFixed(2)}</div>
            </section>
            <section className="order-section right">
                <div>
                    <span className={`status ${order.orders.orderStatus.toLowerCase()}`}>{order.orders.orderStatus}</span>
                    <span className={`status ${order.orders.paymentStatus.toLowerCase()}`}>{order.orders.paymentStatus}</span>
                </div>
                <div className='date'>{formattedDateTime}</div>
            </section>
        </div>
    );
};

export default OrderCard;