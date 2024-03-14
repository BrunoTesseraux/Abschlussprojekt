import { User } from "../../../models"

export const deleteUser = async (userId) => {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
}