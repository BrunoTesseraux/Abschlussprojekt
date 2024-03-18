import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { catchAsync } from "../utils/catchAsync.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// design pattern: factory function -> produces jwt auth middleware
export const makeJWTAuth = ({ tokenType = "access" }) => {
  const doJWTAuth = catchAsync(
    (req, _, next) => {
      const token = extractToken(req, tokenType);
      console.log(token);
      const verifiedTokenPayload = jwt.verify(token, JWT_SECRET);
      if (!verifiedTokenPayload) throw new Error("Invalid token");

      if (verifiedTokenPayload.type !== tokenType)
        throw new Error("Invalid token type");
      console.log(verifiedTokenPayload);
      req.verifiedUserClaims = verifiedTokenPayload;
      next();
    },
    { message: "Invalid authorization", status: 401 }
  );

  return doJWTAuth;
};

function extractToken(req, tokenType) {
  console.log(req.headers.authorization);
  if (tokenType === "refresh") {
    return req.session.refreshToken;
  }
  // any other tokenType (refresh, ...)
  if (!req.headers.authorization) throw new Error("Authorization required!");
  const [authType, token] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !token)
    throw new Error("Invalid authorization type");

  return token;
}
