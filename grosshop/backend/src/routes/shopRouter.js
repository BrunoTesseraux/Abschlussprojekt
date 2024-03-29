import express from "express";
import { ShopController } from "../controllers/index.js";

const router = express.Router();

router.get("/", ShopController.getAllShopsCtrl);
router.get("/:sid", ShopController.getOneShopCtrl);

export default router;
