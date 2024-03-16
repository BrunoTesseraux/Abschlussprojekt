import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
import {
  orderRouter,
  productRouter,
  promotionRouter,
  shopRouter,
  userRouter,
} from "./src/routes/index.js";
import ErrorController from "./src/controllers/errorController.js";
import AppError from "./src/utils/AppError.js";

dotenv.config({ path: "./config.env" });

// Defines the session cookie expiration date
const tenDaysInMs = 10 * 24 * 60 * 60 * 1000;

const isFrontendLocalhost =
  process.env.FRONTEND_URL.startsWith("http://localhost");
const cookieSessionSecret = process.env.COOKIE_SESSION_SECRET;

const app = express();

// re-configure cors middleware
app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true }));
// add parser for cookies
app.set("trust proxy", 1); // trust first proxy
const cookieSessionOptions = {
  name: "session",
  secret: cookieSessionSecret, // frei wählbar
  httpOnly: true,
  expires: new Date(Date.now() + tenDaysInMs),
  sameSite: isFrontendLocalhost ? "lax" : "none",
  secure: isFrontendLocalhost ? false : true,
};
app.use(cookieSession(cookieSessionOptions));

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
