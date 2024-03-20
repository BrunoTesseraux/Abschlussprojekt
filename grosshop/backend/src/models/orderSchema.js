import mongoose from "mongoose";
import validator from "validator";
import { addressSchema } from "../models/adressSchema.js";

// Order Schema
const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    shopId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Order musst have a shop id"],
    },
    orderStatus: {
      type: String,
      enum: ["pending", "shipped", "cancelled", "processing", "picked"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded"],
      default: "peding",
    },
    orderNumber: { type: String, required: true },
    orderTimestamp: { type: Date, required: true },
    shippingAdress: addressSchema,
  },
  { collection: "Orders", timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
