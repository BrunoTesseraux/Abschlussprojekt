import { User } from "../../../models/index.js";
import AppError from "../../../utils/AppError.js";

export const getWishlist = async (userId, next) => {
  try {
    const userWithWishlist = await User.findById(userId)
      .populate("wishlist.productId")
      .exec();

    if (!userWithWishlist) {
      return next(new AppError("No user found", 404));
    }

    const wishlistProducts = userWithWishlist.wishlist.map((item) => {
      const {
        productName,
        productImage,
        price,
        rating,
        cuisine,
        category,
        ratio,
      } = item.productId;
      return {
        productId: item.productId._id,
        productName,
        productImage,
        price,
        rating,
        cuisine,
        category,
        ratio,
        quantity: item.quantity,
      };
    });
    console.log(wishlistProducts);
    return wishlistProducts;
  } catch (error) {
    throw error;
  }
};
