import express from "express";
import { ProductController } from "../controllers/index.js";

const router = express.Router();

router.get("/", ProductController.getAllProductsCtrl);
router.get("/todayDeals", ProductController.getTodayDealsProductsCtrl);
router.get("/memberDeals", ProductController.getMemberDealsProductsCtrl);
router.get("/searchProduct/:q", ProductController.getSearchProductCtrl);
router.get("/:pid", ProductController.getOneProductCtrl);

export default router;
