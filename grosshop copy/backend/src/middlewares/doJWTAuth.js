import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const doJWTAuth = catchAsync(
  (req, _, next) => {
    if (!req.headers.authorization) throw new Error("Authorization required!");

    const [authType, token] = req.headers.authorization.split(" ");
    if (authType !== "Bearer" || !token)
      throw new Error("Invalid authorization type");

    const verifiedTokenPayload = jwt.verify(token, JWT_SECRET);
    if (!verifiedTokenPayload) return next(new AppError("Invalid token", 401));
    req.verifiedUserClaims = verifiedTokenPayload;
    next();
  },
  { message: "Invalid authorization", status: 401 }
);
