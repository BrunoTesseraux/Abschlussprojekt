import { catchAsync } from "../utils/catchAsync.js";
import { OrderService } from "../services/index.js";

const getAllOrdersCtrl = catchAsync(async (req, res, next) => {});

const postUserOrder = catchAsync(async (req, res, next) => {});

const patchUserOrder = catchAsync(async (req, res, next) => {});

export const postPlaceOrderCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid;
  const orderDetails = req.body;
  // console.log("????????????????????", orderDetails);
  const order = await OrderService.createOrderAndClearCart(
    userId,
    orderDetails
  );
  // console.log("===================", order);
  res.status(201).json({
    status: "success",
    data: {
      order,
    },
  });
});

export const OrderController = {
  getAllOrdersCtrl,
  postUserOrder,
  patchUserOrder,
  postPlaceOrderCtrl,
};

export default OrderController;
