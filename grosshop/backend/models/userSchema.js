// User Schema
const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date },
    address: { type: String },
    phoneNumber: { type: String },
    profilePicture: { type: String },
    member: { type: Boolean }.type,
    wishlist: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    cart: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    orderHistory: [
      {
        orders: { type: mongoose.Types.ObjectId, ref: "Order" },
        orderDate: { type: Date, default: Date.now },
      },
    ],
  },
  { collection: "User", timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
