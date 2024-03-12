import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`./public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
});

app.use("api/v1/users", userRouter);
app.use("api/v1/products", productRouter);
app.use("api/v1/shops", shopRouter);
app.use("api/v1/wishlist", wishlistRouter);
app.use("api/v1/cart", cartRouter);
app.use("api/v1/order-history", orderHistoryRouter);
app.use("api/v1/promotions", promotionRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't finde Route ${req.originURL} on this server`));
});

app.use(ErrorController.globalErrorCtrl);

export default app;
