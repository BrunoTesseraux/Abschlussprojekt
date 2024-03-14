import express from "express";
import {
  AuthController,
  CartController,
  HistoryController,
  UserController,
  WishlistController,
} from "../controllers/index.js";

const router = express.Router();

// general user routes
router
  .route("/:id")
  .get(UserController.getOneUserCtrl)
  .patch(UserController.patchUpdateProfileCtrl)
  .delete(UserController.deleteUserCtrl);

// remove Item from wishlist or cart route

router.delete("/removeItem", UserController.deleteUserCtrl);

// wishlist routes

router.get("/wishlist", WishlistController.getWishlistCtrl);

router
  .route("/wishlist/:id")
  .patch(WishlistController.patchOneWishlistItemCtrl)
  .delete(WishlistController.deleteWishlistItemCtrl);

// cart routes

router.get("/cart", CartController.getCartCtrl);

router
  .route("/cart/:id")
  .patch(CartController.patchCartItemCtrl)
  .delete(CartController.deleteCartItemCtrl);

// history routes

router
  .route("/orderHistory")
  .get(HistoryController.getAllHistoriesCtrl)
  .post(HistoryController.postHistoryCtrl);

router.patch("/orderHistory/:id", HistoryController.patchHistoryCtrl);

// auth routes
router.post("/login", AuthController.postLoginCtrl);
router.post("/signup", AuthController.postSignupCtrl);
router.post("/forgotPassword", AuthController.postForgotPasswordCtrl);
router.patch("/updateMyPassword", AuthController.patchUpdatePasswordCtrl);
router.patch("/resetPassword/:token", AuthController.patchResetPasswordCtrl);

export default router;