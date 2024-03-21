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

  res.status(OK).json({
    status: "success",
    data: { wishlist: updatedWishlist },
  });
});

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

export const moveItemsToCartCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid;
  const { itemIds } = req.body; // Die IDs der Artikel, die verschoben werden sollen
  // console.log("================", itemIds);
  const result = await UserService.moveItemsToCart(userId, itemIds, next);

  res.status(200).json({
    status: "success",
    message: "Items successfully moved to cart",
    data: result,
  });
});

export const WishlistController = {
  getWishlistCtrl,
  patchOneWishlistItemCtrl,
  moveItemsToCartCtrl,
  removeProductsFromWishlistCtrl,
};

export default WishlistController;
