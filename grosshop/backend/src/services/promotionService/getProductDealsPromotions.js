import { Promotion } from "../../models/index.js";

export const getProductDealsPromotions = async () => {
  return await Promotion.find({ deal: "product" });
};
