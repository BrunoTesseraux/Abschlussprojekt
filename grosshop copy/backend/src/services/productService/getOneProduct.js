import { Product } from "../../models/index.js";

export const getOneProduct = async (pid) => {
  return await Product.findById(pid);
};
