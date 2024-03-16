import { BAD_REQUEST, NOT_FOUND } from "../../../helpers/httpStatusCodes.js";
import { User } from "../../../models/index.js";
import AppError from "../../../utils/AppError.js";

export const updateUserProfil = async (userId, updatedProfileData, next) => {
  
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        updatedProfileData,
        { new: true }
      );

    if (!updatedUser) return  next(new AppError("No User found with that ID", BAD_REQUEST));

    console.log(updatedUser);

    return updatedUser;
};
