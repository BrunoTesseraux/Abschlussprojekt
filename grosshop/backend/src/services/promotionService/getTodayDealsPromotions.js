import { Promotion } from "../../models/index.js";

export const getTodayDealsPromotions = async () => {
  return await Promotion.find({ deal: "today" });
};
