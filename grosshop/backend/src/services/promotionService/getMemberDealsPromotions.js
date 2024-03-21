import { Promotion } from "../../models/index.js";

export const getMemberDealsPromotions = async () => {
  try {
    // Finde alle Promotionen mit Deal "member" und popiliere die Produkte
    const promotions = await Promotion.find({ deal: "member" })
      .populate("products.productId")
      .exec();

    return promotions;
  } catch (error) {
    throw new Error("Error fetching member deals promotions: " + error.message);
  }
};
