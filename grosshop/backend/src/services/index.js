import { forgotPassword } from "./userService/auth/forgotPassword.js";
import { loginUser } from "./userService/auth/loginUser.js";
import { refreshUserToken } from "./userService/auth/refreshUserToken.js";
import { registerUser } from "./userService/auth/registerUser.js";
import { resetPassword } from "./userService/auth/resetPassword.js";
import { updatePassword } from "./userService/auth/updatePassword.js";
import { verifyEmail } from "./userService/auth/verifyEmail.js";
import { deleteCartItem } from "./userService/cart/deleteCartItem.js";
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
import { getShop } from "./shopService/getShop.js";
import { getShops } from "./shopService/getShops.js";
import { getMemberDeals } from "./promotionService/getMemberDeals.js";
import { getProductDeals } from "./promotionService/getProductDeals.js";
import { getPromotion } from "./promotionService/getPromotion.js";
import { getTodayDeals } from "./promotionService/getTodayDeals.js";
import { addNewProduct } from "./productService/addNewProduct.js";
import { getProduct } from "./productService/getProduct.js";
import { getProductDetail } from "./productService/getProductDetail.js";

const UserService = {
  registerUser,
  getOneUser,
  updateUserProfil,
  deleteUser,
  deleteRemoveItem,
  removeWishlistItem,
  getWishlist,
  updateWishlist,
  forgotPassword,
  loginUser,
  refreshUserToken,
  resetPassword,
  updatePassword,
  verifyEmail,
  deleteCartItem,
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
  getMemberDeals,
  getProductDeals,
  getPromotion,
  getTodayDeals,
};

const ProductService = {
  addNewProduct,
  getProduct,
  getProductDetail,
};

export { UserService, ShopService, PromotionService, ProductService };
