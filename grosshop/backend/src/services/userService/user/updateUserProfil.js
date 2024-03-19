import { BAD_REQUEST, NOT_FOUND } from "../../../helpers/httpStatusCodes.js";
import { User } from "../../../models/index.js";
import AppError from "../../../utils/AppError.js";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const updateUserProfil = async (userId, updatedProfileData, next) => {
  // const newUser = {
  //   name: updatedProfileData.name,
  //   dateOfBirth: updatedProfileData.dateOfBirth,
  //   address: updatedProfileData.address,
  //   phoneNumber: updatedProfileData.phoneNumber,
  //   profilePicture: updatedProfileData.profilePicture,
  //   member: updatedProfileData.member,
  // };
  const user = User.findById(userId);
  if (!user) return next(new AppError("No user found", NOT_FOUND));
  console.log("===============", user);
  if (user.profilePicture) {
    const oldImagePath = path.join(__dirname, user.profilePicture); // Pfad ggf. anpassen
    fs.unlink(oldImagePath, (err) => {
      if (err) console.error("Failed to delete old image:", err);
    });
  }

  const updatedUser = await User.findByIdAndUpdate(userId, updatedProfileData, {
    new: true,
  });

  if (!updatedUser)
    return next(new AppError("No User found with that ID", BAD_REQUEST));

  console.log(updatedUser);

  return updatedUser;
};
