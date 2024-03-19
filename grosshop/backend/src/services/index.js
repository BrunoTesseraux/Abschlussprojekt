import { forgotPassword } from "./userService/auth/forgotPassword.js";
import { loginUser } from "./userService/auth/loginUser.js";
import { refreshUserToken } from "./userService/auth/refreshUserToken.js";
import { registerUser } from "./userService/auth/registerUser.js";
import { resetPassword } from "./userService/auth/resetPassword.js";
import { updatePassword } from "./userService/auth/updatePassword.js";
import { verifyEmail } from "./userService/auth/verifyEmail.js";

// import { deleteCartItem } from "./userService/cart/deleteCartItems.js";
import { getCart } from "./userService/cart/getCart.js";
import { updateCartItem } from "./userService/cart/updateCartItem.js";

import { addHistory } from "./userService/orderHistory/addHistory.js";
import { getHistories } from "./userService/orderHistory/getHistories.js";
import { updateHistory } from "./userService/orderHistory/updateHistory.js";

import { deleteRemoveItem } from "./userService/user/deleteRemoveItem.js";
import { deleteUser } from "./userService/user/deleteUser.js";
import { getOneUser } from "./userService/user/getOneUser.js";
import { updateUserProfil } from "./userService/user/updateUserProfil.js";

import { removeWishlistItem } from "./userService/wishlist/removeWishlistItem.js";
import { getWishlist } from "./userService/wishlist/getWishlist.js";
import { updateWishlist } from "./userService/wishlist/updateWishlist.js";
import { moveItemsToCart } from "./userService/wishlist/moveItemsToCart.js";

import { getShop } from "./shopService/getShop.js";
import { getShops } from "./shopService/getShops.js";

import { getMemberDealsPromotions } from "./promotionService/getMemberDealsPromotions.js";
import { getProductDealsPromotions } from "./promotionService/getProductDealsPromotions.js";
import { getAllPromotions } from "./promotionService/getAllPromotions.js";
import { getTodayDealsPromotions } from "./promotionService/getTodayDealsPromotions.js";

import { getAllProducts } from "./productService/getAllProducts.js";
import { getOneProduct } from "./productService/getOneProduct.js";
import { getTodayDealsProducts } from "./productService/getTodayDealsProducts.js";
import { getMemberDealsProducts } from "./productService/getMemberDealsProducts.js";
import { getSearchProduct } from "./productService/getSearchProduct.js";

import { createOrderAndClearCart } from "./orderService/createOrderAndClearCart.js";

const UserService = {
  registerUser,
  getOneUser,
  updateUserProfil,
  deleteUser,
  deleteRemoveItem,
  removeWishlistItem,
  getWishlist,
  updateWishlist,
  moveItemsToCart,
  forgotPassword,
  loginUser,
  refreshUserToken,
  resetPassword,
  updatePassword,
  verifyEmail,
  // deleteCartItem,
  getCart,
  updateCartItem,
  addHistory,
  getHistories,
  updateHistory,
};

const ShopService = {
  getShop,
  getShops,
};

const PromotionService = {
  getMemberDealsPromotions,
  getProductDealsPromotions,
  getAllPromotions,
  getTodayDealsPromotions,
};

const ProductService = {
  getAllProducts,
  getOneProduct,
  getTodayDealsProducts,
  getMemberDealsProducts,
  getSearchProduct,
};

const OrderService = {
  createOrderAndClearCart,
};

export { UserService, ShopService, PromotionService, ProductService };
