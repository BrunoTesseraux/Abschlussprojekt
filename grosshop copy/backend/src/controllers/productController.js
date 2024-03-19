import { OK } from "../helpers/httpStatusCodes.js";
import { ProductService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

const getAllProductsCtrl = catchAsync(async (req, res, next) => {
  const products = await ProductService.getAllProducts();
  res.status(OK).json({
    status: "success",
    data: {
      products,
    },
  });
});

const getOneProductCtrl = catchAsync(async (req, res, next) => {
  const pid = req.params.pid;
  const product = await ProductService.getOneProduct(pid);
  res.status(OK).json({
    status: "success",
    data: {
      product,
    },
  });
});

const getTodayDealsProductsCtrl = catchAsync(async (req, res, next) => {
  const products = await ProductService.getTodayDealsProducts();
  res.status(OK).json({
    status: "success",
    data: {
      products,
    },
  });
});

const getMemberDealsProductsCtrl = catchAsync(async (req, res, next) => {
  const deal = req.body.deal;
  const products = await ProductService.getMemberDealsProducts(deal);
  res.status(OK).json({
    status: "success",
    data: {
      products,
    },
  });
});

const getSearchProductCtrl = catchAsync(async (req, res, next) => {
  const query = req.params.q; // Angenommen, du möchtest nach einem Query-Parameter `q` suchen
  const products = await ProductService.getSearchProduct(query);
  res.status(OK).json({
    status: "success",
    data: {
      products,
    },
  });
});

export const ProductController = {
  getAllProductsCtrl,
  getOneProductCtrl,
  getTodayDealsProductsCtrl,
  getMemberDealsProductsCtrl,
  getSearchProductCtrl,
};
export default ProductController;
