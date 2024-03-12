import mongoose from "mongoose";

// Cart Schema
const cartSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    products: [{
        productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 }
    }]
},
{ collection:  "Cart", timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
