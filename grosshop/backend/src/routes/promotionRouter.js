import express from "express";
import { PromotionController } from "../controllers/index.js";
import { makeJWTAuth } from "../middlewares/makeJWTAuth.js";

const router = express.Router();

// Erstelle die JWT Authentifizierungsmiddleware für Access Tokens
const jwtAuthForAccess = makeJWTAuth({ tokenType: "access" });

router.get("/", PromotionController.getAllPromotionsCtrl);
router.get("/todayDeals", PromotionController.getTodayDealsPromotionsCtrl);
router.get(
  "/memberDeals",
  // jwtAuthForAccess,
  PromotionController.getMemberDealsPromotionsCtrl
);
router.get("/productDeals", PromotionController.getProductDealsPromotionsCtrl);

export default router;
