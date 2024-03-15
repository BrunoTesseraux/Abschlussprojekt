import mongoose from "mongoose";
import validator from "validator";

// Shop Schema
const shopAddressSchema = new mongoose.Schema(
  {
    street: { type: String },
    streetNumber: { type: String },
    city: { type: String },
    zip: { type: String },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0] },
    },
  },
  { collection: "Shops", timestamps: true }
);

const shopSchema = new mongoose.Schema(
  {
    shopName: { type: String, required: true },
    shopAddress: shopAddressSchema,
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
