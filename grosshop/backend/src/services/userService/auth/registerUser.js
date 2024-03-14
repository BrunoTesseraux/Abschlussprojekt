import User from "../../../models/userSchema.js";

export const registerUser = async (newUserInfo) => {

  const foundUser = await User.create(newUserInfo);
  console.log(foundUser);

  return foundUser;
}