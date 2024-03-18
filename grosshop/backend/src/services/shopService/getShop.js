import { Shop } from "../../models/index.js";

export const getShop = async (shopId) => {
  const shop = await Shop.findById(shopId);
  return shop;
};
