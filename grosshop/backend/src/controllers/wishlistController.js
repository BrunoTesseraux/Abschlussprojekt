import { catchAsync } from "../utils/catchAsync.js";
import { OK } from "../helpers/httpStatusCodes.js";
import { UserService } from "../services/index.js";

const getWishlistCtrl = catchAsync(async (req, res, next) => {
  const wishlist = await UserService.getWishlist(req.params.uid); // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  res.status(OK).json({
    status: "success",
    data: { wishlist }
  });
});

const patchOneWishlistItemCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid; // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  const { productId, quantity } = req.body.wishlist[0];
  console.log(productId, quantity);
  
  // Annahme: updateWishlist erhält die Benutzer-ID, Produkt-ID und Menge als Argumente
  const updatedWishlist = await UserService.updateWishlist(userId, productId, quantity);

  res.status(OK).json({
    status: "success",
    data: { wishlist: updatedWishlist }
  });
});

// const patchManyWishlistItemsCtrl = catchAsync(async (req, res, next) => {
//   const userId = req.params.uid; // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
//   const wishlistItems = req.body; // Annahme: Ein Array von Objekten mit productId und quantity

//   // Annahme: updateWishlist erhält die Benutzer-ID und ein Array von Objekten mit productId und quantity als Argument
//   const updatedWishlist = await UserService.updateWishlist(userId, wishlistItems);

//   res.status(OK).json({
//     status: "success",
//     data: { wishlist: updatedWishlist }
//   });
// });

const deleteWishlistItemCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid; // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  const wishlistItemId = req.body._id;

  // Annahme: deleteWishlistItem erhält die Benutzer-ID und die Wishlist-ID als Argumente
  await UserService.deleteWishlistItem(userId, wishlistItemId);

  res.status(OK).json({
    status: "success",
    message: "Item removed from wishlist successfully"
  });
});

export const WishlistController = {
  getWishlistCtrl,
  patchOneWishlistItemCtrl,
  // patchManyWishlistItemsCtrl,
  deleteWishlistItemCtrl
};

export default WishlistController;
