import express from "express";
import { ProductController } from "../controllers/index.js";

const router = express.Router();

router.get("/", ProductController.getAllProductsCtrl);
router.get("/:id", ProductController.getOneProductCtrl);
router.get("/todayDeals", ProductController.getTodayDealsCtrl);
router.get("/memberDeals", ProductController.getMemberDealsCtrl);
router.get("/searchProduct", ProductController.getSearchProductCtrl);

export default router;
