import User from "../../../models/userSchema.js";
import AppError from "../../../utils/AppError.js";

export const registerUser = async (newUserInfo, next) => {
  const foundUser = await User.findOne({
    email: newUserInfo.email,
  });

  if (foundUser)
    return next(new AppError("User with this email already exists", 409));

  const user = await User.create(newUserInfo);
  console.log(user);

  return user;
};
