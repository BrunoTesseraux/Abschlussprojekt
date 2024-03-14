import { User } from "../../../models/index.js"

export const getOneUser = async (userId) => {
    const oneUser = await User.findById(userId);
    return oneUser;
}