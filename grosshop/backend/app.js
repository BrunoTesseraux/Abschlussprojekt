import express from "express";
import cors from "cors";
import morgan from "morgan";
import {
  orderRouter,
  productRouter,
  promotionRouter,
  shopRouter,
  userRouter,
} from "./src/routes/index.js";
import ErrorController from "./src/controllers/errorController.js";
import AppError from "./src/utils/AppError.js";


const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`./public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/shops", shopRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/promotions", promotionRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't finde Route ${req.originalUrl} on this server`));
});

app.use(ErrorController.globalErrorCtrl);

export default app;
