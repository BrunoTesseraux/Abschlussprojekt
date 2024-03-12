import mongoose from "mongoose";

// Product Schema
const productSchema = new Schema({
    productName: { type: String, required: true },
    productImage: { type: String },
    price: { type: Number, required: true },
    rating: { type: Number },
    ratio: [{
        amount: { type: Number, required: true },
        unit: { type: String, required: true }
    }],
    cuisine: { type: String, required: true },
    productType: { type: String, required: true },
},
{ collection: "Product", timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
