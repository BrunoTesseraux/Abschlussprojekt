import { catchAsync } from "../utils/catchAsync.js";

const getAllPromotionsCtrl = catchAsync(async (req, res, next) => {

});

const getTodayDealsCtrl = catchAsync(async (req, res, next) => {

});

const getMemberDealsCtrl = catchAsync(async (req, res, next) => {

});

const getProductDealsCtrl = catchAsync(async (req, res, next) => {

});

export const PromotionController = {
    getAllPromotionsCtrl,
    getTodayDealsCtrl,
    getMemberDealsCtrl,
    getProductDealsCtrl,
}