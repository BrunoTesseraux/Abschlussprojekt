import express from "express";
import { OrderController } from "../controllers/index.js";

const router = express.Router();

// router
//   .route("/")
//   .get(OrderController.getAllOrdersCtrl)
//   .post(OrderController.postUserOrder);

// router.patch("/:id");

router.post("/:uid", OrderController.postPlaceOrderCtrl);

export default router;
