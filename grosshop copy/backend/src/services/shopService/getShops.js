import { Shop } from "../../models/index.js";

export const getShops = async () => {
  const shops = await Shop.find();
  return shops;
};
