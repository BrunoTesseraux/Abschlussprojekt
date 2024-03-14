import User from "../../../models/userSchema.js";

export async function registerUser(newUserInfo) {

  const foundUser = await User.create(newUserInfo);
  console.log(foundUser);

  return foundUser;
}