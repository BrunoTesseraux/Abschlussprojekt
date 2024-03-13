import mongoose from "mongoose";

// Order Schema
const orderSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    products: [{
        productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
    shopId: { type: mongoose.Types.ObjectId }, 
    orderStatus: { type: String, enum: ['pending', 'shipped', 'cancelled', 'processing', 'picked'], default: 'pending' },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'refunded'], default: 'peding' },
    orderNumber: { type: String, required: true },
    orderTimestamp: { type: Date, required: true },
    shippingAdress: { type: String, required: true },
}, { collection: "Order", timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
