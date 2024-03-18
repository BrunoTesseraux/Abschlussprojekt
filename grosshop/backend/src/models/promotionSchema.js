import mongoose from "mongoose";
import validator from "validator";

// Promotion Schema
const promotionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    discount: { type: Number, required: true }, // Discount in Prozent
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        _id: false,
      },
    ], // Produkte, dem die Promotion zugeordnet ist
    deal: { type: String, enum: ["today", "member", "product"] },
    shopId: { type: mongoose.Types.ObjectId, ref: "Shop", required: true }, // Shop, dem die Promotion zugeordnet ist
    // Weitere Felder wie Bedingungen, usw. können hier hinzugefügt werden
  },
  { collection: "Promotions", timestamps: true }
);

const Promotion = mongoose.model("Promotion", promotionSchema);

export default Promotion;
