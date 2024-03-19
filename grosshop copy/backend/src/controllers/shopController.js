import { OK } from "../helpers/httpStatusCodes.js";
import { ShopService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

const getAllShopsCtrl = catchAsync(async (req, res, next) => {
  const allShops = await ShopService.getShops();
  res.status(OK).json({ status: "success", data: { shops: allShops } });
});

const getOneShopCtrl = catchAsync(async (req, res, next) => {
  const shopId = req.params.sid;
  const shop = await ShopService.getShop(shopId);
  res.status(OK).json({
    status: "success",
    data: {
      shop,
    },
  });
});

export const ShopController = {
  getAllShopsCtrl,
  getOneShopCtrl,
};

export default ShopController;
