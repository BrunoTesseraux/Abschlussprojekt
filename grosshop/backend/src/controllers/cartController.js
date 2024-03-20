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
  const { uid } = req.params;
  const { productIds } = req.body;
  console.log("????????????????", productIds);
  console.log("!!!!!!!!!!!!!!!!!", uid);
  const updatedCart = await UserService.removeProductsFromCart(uid, productIds);
  res.status(200).json({
    status: "success",
    data: {
      cart: updatedCart,
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
