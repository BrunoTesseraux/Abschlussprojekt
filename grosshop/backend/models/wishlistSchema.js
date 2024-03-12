// Wishlist Schema
const wishlistSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    products: [{
        productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
},
{ collection: "Wishlist", timestamps: true });

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;