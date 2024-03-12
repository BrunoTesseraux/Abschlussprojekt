// User Schema
const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date },
    address: { type: String },
    phoneNumber: { type: String },
    profilePicture: { type: String },
    member: { type: Boolean }
},
{ collection: "User", timestamps: true });

const User = mongoose.model('User', userSchema);

export default userSchema;
