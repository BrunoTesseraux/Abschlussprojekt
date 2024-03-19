import { OK } from "../../../helpers/httpStatusCodes.js";
import { User } from "../../../models/index.js";
import AppError from "../../../utils/AppError.js";

export const getCart = async (userId, next) => {
  try {
    const userWithCartList = await User.findById(userId)
      .populate("cart.productId")
      .exec();

    if (!userWithCartList) {
      return next(new AppError("No user found", 404));
    }

    const cartProducts = userWithCartList.cart.map((item) => {
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
    console.log(cartProducts);
    return cartProducts;
  } catch (error) {
    throw error;
  }
};
