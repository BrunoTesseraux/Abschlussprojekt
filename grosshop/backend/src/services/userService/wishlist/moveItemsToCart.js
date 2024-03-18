import { User } from "../../../models/index.js";
import AppError from "../../../utils/AppError.js";

export const moveItemsToCart = async (userId, itemIds, next) => {
  const user = await User.findById(userId);
  if (!user) return next(new AppError("User not found", 404));

  // Filtere die Artikel, die verschoben werden sollen
  const itemsToMove = user.wishlist.filter((item) =>
    itemIds.includes(item.productId.toString())
  );

  // Entferne die Artikel aus der Wishlist
  user.wishlist = user.wishlist.filter(
    (item) => !itemIds.includes(item.productId.toString())
  );

  // Füge die Artikel zum Warenkorb hinzu
  itemsToMove.forEach((item) => {
    const index = user.cart.findIndex((cartItem) =>
      cartItem.productId.equals(item.productId)
    );
    if (index > -1) {
      // Artikel existiert bereits im Warenkorb, aktualisiere die Menge
      user.cart[index].quantity += item.quantity;
    } else {
      // Artikel existiert noch nicht im Warenkorb, füge ihn hinzu
      user.cart.push(item);
    }
  });

  await user.save();

  return { wishlist: user.wishlist, cart: user.cart };
};
