import { addToWishlist } from "./addToWishlist";
import { deleteFromWishlist } from "./deleteFromWishlist";

export const handleLikeClick = (product, user, likeSrc, setLikeSrc) => {
    const newLikeSrc = likeSrc === "like.svg" ? "/like2.svg" : "/like.svg";
    setLikeSrc(newLikeSrc);

    if (newLikeSrc === "/like2.svg") {
        addToWishlist(product, user);
    } else {
        deleteFromWishlist(product, user);
    }
};