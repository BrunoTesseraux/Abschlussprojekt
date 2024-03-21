import { Promotion } from "../../models/index.js";

export const getProductDealsPromotions = async () => {
  try {
    // Finde alle Promotionen mit Deal "member" und popiliere die Produkte
    const promotions = await Promotion.find({ deal: "product" })
      .populate("products.productId")
      .exec();

    return promotions;
  } catch (error) {
    throw new Error(
      "Error fetching product deals promotions: " + error.message
    );
  }
};
