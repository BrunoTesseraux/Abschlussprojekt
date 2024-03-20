import { OK } from "../helpers/httpStatusCodes.js";
import { UserService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

const getAllHistoriesCtrl = catchAsync(async (req, res, next) => {
  const orderHistory = await UserService.getHistories(req.params.uid, next);
  res.status(OK).json({
    status: "success",
    data: { orderHistory },
  });
});

// const postHistoryCtrl = catchAsync(async (req, res, next) => {});

const patchHistoryCtrl = catchAsync(async (req, res, next) => {});

export const HistoryController = {
  getAllHistoriesCtrl,
  patchHistoryCtrl,
  // postHistoryCtrl,
};

export default HistoryController;
