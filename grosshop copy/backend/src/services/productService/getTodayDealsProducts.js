import { Product } from "../../models/index.js";

export const getTodayDealsProducts = async () => {
  return await Product.find({ deal: "today" });
};
