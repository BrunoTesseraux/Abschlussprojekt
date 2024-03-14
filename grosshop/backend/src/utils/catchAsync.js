export const catchAsync = (controllerFn) => {
  return (req, res, next) => {
    controllerFn(req, res, next).catch(next);
  };
};
