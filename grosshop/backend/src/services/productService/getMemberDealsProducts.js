import { Product } from "../../models/index.js";

export const getMemberDealsProducts = async () => {
  return await Product.find({ deal: "member" });
};
