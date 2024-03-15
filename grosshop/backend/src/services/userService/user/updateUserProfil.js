import { NOT_FOUND } from "../../../helpers/httpStatusCodes.js";
import { User } from "../../../models/index.js"
import AppError from "../../../utils/AppError.js";

export const updateUserProfil = async (userId, updatedProfileData) => {
    const existingUser = await User.findById(userId);

    if (!existingUser) return next(new AppError('User not found', NOT_FOUND));

    if (updatedProfileData.name) {
        existingUser.name = updatedProfileData.name;
    }
    if (updatedProfileData.email) {
        existingUser.email = updatedProfileData.email;
    }
}
