import { catchAsync } from "../utils/catchAsync.js";
import { OK } from "../helpers/httpStatusCodes.js";
import { UserService } from "../services/index.js";

const getWishlistCtrl = catchAsync(async (req, res, next) => {
  const wishlist = await UserService.getWishlist(req.params.uid, next); // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  res.status(OK).json({
    status: "success",
    data: { wishlist },
  });
});

const patchOneWishlistItemCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid; // Annahme: Benutzer-ID wird aus dem Auth-Token abgerufen
  const wishlistData = req.body.wishlist;
  console.log("Wishlist Data: ", wishlistData);

  // Annahme: updateWishlist erhält die Benutzer-ID, Produkt-ID und Menge als Argumente
  const updatedWishlist = await UserService.updateWishlist(
    userId,
    wishlistData,
    next
  );
  console.log("===================", updatedWishlist);

  res.status(OK).json({
    status: "success",
    data: { wishlist: updatedWishlist },
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

const removeProductsFromWishlistCtrl = catchAsync(async (req, res, next) => {
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

export const WishlistController = {
  getWishlistCtrl,
  patchOneWishlistItemCtrl,
  // patchManyWishlistItemsCtrl,
  removeProductsFromWishlistCtrl,
};

export default WishlistController;
