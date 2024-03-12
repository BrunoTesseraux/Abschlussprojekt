import mongoose from "mongoose";

// Order Schema
const orderSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    products: [{
        productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    shopId: { type: mongoose.Types.ObjectId }, // Shop, dem die Bestellung zugeordnet ist
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
    // Weitere Felder wie Lieferadresse, Zahlungsinformationen usw. können hier hinzugefügt werden
}, { collection: "Order", timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
