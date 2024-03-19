import { OK } from "../helpers/httpStatusCodes.js";
import { PromotionService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";
import { User } from "../models/index.js"; // Importiere das User-Model

const getAllPromotionsCtrl = catchAsync(async (req, res, next) => {
  const promotions = await PromotionService.getAllPromotions();
  res.status(OK).json({ status: "success", data: { promotions } });
});

const getTodayDealsPromotionsCtrl = catchAsync(async (req, res, next) => {
  const promotions = await PromotionService.getTodayDealsPromotions();
  res.status(OK).json({ status: "success", data: { promotions } });
});

const getMemberDealsPromotionsCtrl = catchAsync(async (req, res, next) => {
  // const userId = req.verifiedUserClaims.id;

  // const user = await User.findById(userId);
  // if (!user || !user.member) {
  //   return res.status(403).json({
  //     status: "fail",
  //     message: "Dieser Bereich ist nur für Mitglieder zugänglich.",
  //   });
  // }

  const promotions = await PromotionService.getMemberDealsPromotions();
  res.status(OK).json({
    status: "success",
    data: {
      promotions,
    },
  });
});

const getProductDealsPromotionsCtrl = catchAsync(async (req, res, next) => {
  const promotions = await PromotionService.getProductDealsPromotions();
  res.status(OK).json({ status: "success", data: promotions });
});

export const PromotionController = {
  getAllPromotionsCtrl,
  getTodayDealsPromotionsCtrl,
  getMemberDealsPromotionsCtrl,
  getProductDealsPromotionsCtrl,
};
export default PromotionController;
