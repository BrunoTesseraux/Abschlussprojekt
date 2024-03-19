import express from "express";
import multer from "multer";
import {
  AuthController,
  CartController,
  HistoryController,
  UserController,
  WishlistController,
} from "../controllers/index.js";

const router = express.Router();

// Multer
const attachmentStorage = multer.diskStorage({
  destination: "./data/uploads/",
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadMiddleware = multer({ storage: attachmentStorage });

// general user routes
router
  .route("/:uid")
  .get(UserController.getOneUserCtrl)
  .patch(UserController.patchUpdateProfileCtrl)
  .delete(UserController.deleteUserCtrl);

router.patch(
  "/:uid/profilePictureUpload",
  uploadMiddleware.single("profilePicture"),
  UserController.uploadProfilePictureCtrl
);

// remove Item from wishlist or cart route

router.delete("/removeItem", UserController.deleteUserCtrl);

// wishlist routes

router
  .route("/:uid/wishlist")
  .get(WishlistController.getWishlistCtrl)
  .patch(WishlistController.patchOneWishlistItemCtrl)
  .delete(WishlistController.removeProductsFromWishlistCtrl);

router.patch(
  "/:uid/wishlist/moveToCart",
  WishlistController.moveItemsToCartCtrl
);

// router
//   .route("/wishlist/:id")
//   .patch(WishlistController.patchOneWishlistItemCtrl)

// cart routes

router
  .route("/:uid/cart")
  .get(CartController.getCartCtrl)
  .patch(CartController.patchOneCartItemCtrl)
  .patch(CartController.patchManyCartItemCtrl);

// router
//   .route("/cart/:id")
//   .patch(CartController.patchCartItemCtrl)
//   .delete(CartController.deleteCartItemCtrl);

// history routes

router
  .route("/:uid/orderHistory")
  .get(HistoryController.getAllHistoriesCtrl)
  .patch(HistoryController.patchHistoryCtrl);

// router.patch("/orderHistory/:id", HistoryController.patchHistoryCtrl);

// auth routes
router.post("/login", AuthController.postLoginCtrl);
router.post("/signup", AuthController.postSignupCtrl);
router.post("/forgotPassword", AuthController.postForgotPasswordCtrl);
router.patch("/updateMyPassword", AuthController.patchUpdatePasswordCtrl);
router.patch("/resetPassword/:token", AuthController.patchResetPasswordCtrl);

export default router;
