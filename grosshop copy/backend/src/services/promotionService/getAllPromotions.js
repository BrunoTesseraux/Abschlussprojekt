import { Promotion } from "../../models/index.js";

export const getAllPromotions = async () => {
  return await Promotion.find();
};
