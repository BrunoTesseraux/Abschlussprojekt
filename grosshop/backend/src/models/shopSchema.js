import mongoose from "mongoose";
import validator from "validator";
import { addressSchema } from "./adressSchema.js";

const shopSchema = new mongoose.Schema(
  {
    shopName: { type: String, required: true },
    shopAddress: addressSchema,
    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        stock: { type: Number, default: 0 },
      },
    ],
    promotions: [{ type: mongoose.Types.ObjectId, ref: "Promotion" }], // Promotions, die dem Shop zugeordnet sind
  },
  { collection: "Shops", timestamps: true }
);

shopSchema.index({ "shopAddress.location": "2dsphere" });

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
