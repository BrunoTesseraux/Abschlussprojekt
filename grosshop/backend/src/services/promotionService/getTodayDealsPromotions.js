import { Promotion } from "../../models/index.js";

export const getTodayDealsPromotions = async () => {
  try {
    // Finde alle Promotionen mit Deal "today" und popiliere die Produkte
    const promotions = await Promotion.find({ deal: "today" })
      .populate("products.productId")
      .exec();
    return promotions;
  } catch (error) {
    throw new Error("Error fetching today deals promotions: " + error.message);
  }
};
