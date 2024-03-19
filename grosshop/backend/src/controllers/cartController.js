import { OK } from "../helpers/httpStatusCodes.js";
import { UserService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

const getCartCtrl = catchAsync(async (req, res, next) => {
  const cart = await UserService.getCart(req.params.uid, next); // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  res.status(OK).json({
    status: "success",
    data: { cart },
  });
});

const patchOneCartItemCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid; // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  const cartData = req.body.cart;
  console.log("Wishlist Data: ", cartData);

  // Annahme: updateWishlist erhält die Benutzer-ID, Produkt-ID und Menge als Argumente
  const updatedCartData = await UserService.updateCartItem(
    userId,
    cartData,
    next
  );

  res.status(OK).json({
    status: "success",
    data: { cart: updatedCartData },
  });
});

const removeProductsFromCartCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid; // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  const wishlistItemIds = req.body;

  // Annahme: removeProductsFromWishlist erhält die Benutzer-ID und die Wishlist-ID als Argumente
  const deletedFromWishlist = await UserService.removeWishlistItem(
    userId,
    wishlistItemIds
  );

  res.status(OK).json({
    status: "success",
    message: `${
      req.body.length > 1 ? "Item" : "Items"
    } removed from wishlist successfully`,
    data: {
      wishlist: deletedFromWishlist,
    },
  });
});

// const deleteCartItemCtrl = catchAsync(async (req, res, next) => {});

const CartController = {
  getCartCtrl,
  patchOneCartItemCtrl,
  removeProductsFromCartCtrl,
  // deleteCartItemCtrl,
};

export default CartController;
