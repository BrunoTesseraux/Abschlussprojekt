import mongoose from "mongoose";
import validator from "validator";

// Product Schema
const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productImage: { type: String },
    price: { type: Number, required: true },
    rating: {
      reviews: { type: Number },
      rate: { type: Number },
    },
    ratio: [
      {
        amount: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    ],
    cuisine: { type: String },
    category: { type: String, required: true },
    deal: { type: String, enum: ["today", "member", "product"] },
  },
  { collection: "Products", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
