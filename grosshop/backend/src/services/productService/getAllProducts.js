import { Product } from "../../models/index.js";

export const getAllProducts = async () => {
  return await Product.find();
};
