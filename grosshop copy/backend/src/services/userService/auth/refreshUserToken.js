import User from "../../../models/userSchema.js";
import { createToken } from "../../../utils/jwt.js";

export const refreshUserToken = async (authenticatedUserId) => {
  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User not found");
  const accessToken = createToken(user, "access");
  return { accessToken };
};
