import { User } from "../../../models/index.js";

export const removeProductsFromCart = async (uid, productIds) => {
  const user = await User.findById(uid);
  if (!user) {
    throw new Error("User not found");
  }

  user.cart = user.cart.filter(
    (cartItem) => !productIds.includes(cartItem.productId.toString())
  );
  await user.save();

  return user.cart;
};
