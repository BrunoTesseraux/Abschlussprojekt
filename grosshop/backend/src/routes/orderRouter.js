import express from "express";
import { OrderController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/order")
  .get(OrderController.getAllOrdersCtrl)
  .post(OrderController.postUserOrder);

router.patch("/:id");

export default router;