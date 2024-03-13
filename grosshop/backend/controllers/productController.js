import { catchAsync } from "../utils/catchAsync.js";

const getAllProductsCtrl = catchAsync(async (req, res, next) => {
    
});

const getOneProductCtrl = catchAsync(async (req, res, next) => {

});

const getTodayDealsCtrl = catchAsync(async (req, res, next) => {

});

const getMemberDealsCtrl = catchAsync(async (req, res, next) => {

});

const getSearchProductCtrl = catchAsync(async (req, res, next) => {

});

export const ProductController = {
    getAllProductsCtrl,
    getOneProductCtrl,
    getTodayDealsCtrl,
    getMemberDealsCtrl,
    getSearchProductCtrl,
}