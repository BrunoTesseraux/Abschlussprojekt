import "./OrderCard.scss";

const OrderCard = ({ order }) => {
 

        const formattedDateTime = new Date(order.orderTimestamp).toLocaleString('de-DE', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
    }); 

    return (
        <div className="order-card">
            <section className="order-section left">
                <div className='order-number'>{order.orderNumber}</div>
                <div className='total-price'>${order.totalAmount.toFixed(2)}</div>
            </section>
            <section className="order-section right">
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