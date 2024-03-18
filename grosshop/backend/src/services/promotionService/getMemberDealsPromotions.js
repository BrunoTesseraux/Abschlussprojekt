import { Promotion } from "../../models/index.js";

export const getMemberDealsPromotions = async () => {
  return await Promotion.find({ deal: "member" });
};
