import { catchAsync } from "../utils/catchAsync.js";
import { createOrderAndClearCart } from "../services/orderService/createOrderAndClearCart.js";

const getAllOrdersCtrl = catchAsync(async (req, res, next) => {});

const postUserOrder = catchAsync(async (req, res, next) => {});

const patchUserOrder = catchAsync(async (req, res, next) => {});

export const postPlaceOrderCtrl = catchAsync(async (req, res, next) => {
  const userId = req.params.uid; // oder aus dem Auth-Token extrahieren
  const orderDetails = req.body; // Order-Details aus dem Request-Body

  const order = await createOrderAndClearCart(userId, orderDetails);

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
