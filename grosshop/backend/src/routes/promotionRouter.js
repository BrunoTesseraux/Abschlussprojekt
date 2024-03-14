import express from "express";
import { PromotionController } from "../controllers/index.js";

const router = express.Router();

router.get("/", PromotionController.getAllPromotionsCtrl);
router.get("/todayDeals", PromotionController.getTodayDealsCtrl);
router.get("/memberDeals", PromotionController.getMemberDealsCtrl);
router.get("/productDeals", PromotionController.getProductDealsCtrl);

export default router;
