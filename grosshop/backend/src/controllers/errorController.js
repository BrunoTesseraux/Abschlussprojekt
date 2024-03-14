import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../helpers/httpStatusCodes.js";
// import AppError from "../utils/AppError";

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: "Something went wrong",
    });
  } else {
    res.status(
      err.statusCode.json({
        status: err.status,
        message: err.message,
      })
    );
  }
};

const globalErrorCtrl = (err, req, res, next) => {
  err.statusCode = err.statusCode || INTERNAL_SERVER_ERROR;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };

    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError();
    if (error.name === "TokenExpiredError") error = handleJWTExpiredError();
    sendErrorProd(error, res);
  }
};

const ErrorController = {
  globalErrorCtrl,
};

export default ErrorController;
