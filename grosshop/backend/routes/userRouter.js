import express from "express";

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

router
  .route("/wishlist")
  .get(Wishlist.getWishlistCtrl)
  .post(Wishlist.getWishlistCtrl);

// auth routes
router.post("/login");
