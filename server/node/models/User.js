import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, default: null }, // null if Google login
  googleId: { type: String, default: null },
  avatar: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
