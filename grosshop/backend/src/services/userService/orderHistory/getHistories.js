import { User } from "../../../models/index.js";
import AppError from "../../../utils/AppError.js";

export const getHistories = async (userId, next) => {
  try {
    const userWithOrderHistoryList = await User.findById(userId)
      .populate({
        path: "orderHistory.orderId",
        model: "Order",
        select:
          "orderStatus paymentStatus totalAmount orderNumber orderTimestamp shippingAdress orderId",
      })
      .exec();

    if (!userWithOrderHistoryList) {
      return next(new AppError("No user found", 404));
    }

    const order = userWithOrderHistoryList.orderHistory.map((item) => {
      const {
        orderTimestamp,
        paymentStatus,
        orderStatus,
        totalAmount,
        orderNumber,
      } = item.orderId;
      return {
        orderNumber,
        orderTimestamp,
        paymentStatus,
        orderStatus,
        totalAmount,
      };
    });
    console.log(order);
    return order;
  } catch (error) {
    throw error;
  }
};
