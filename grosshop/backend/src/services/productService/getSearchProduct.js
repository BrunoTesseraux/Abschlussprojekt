import { Product } from "../../models/index.js";

export const getSearchProduct = async (query) => {
  console.log(query);
  return await Product.find({
    $or: [
      { productName: new RegExp(query, "i") },
      { cuisine: new RegExp(query, "i") },
      { category: new RegExp(query, "i") },
    ],
  });
};
