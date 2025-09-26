import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt & updatedAt automatically
);

// Avoid "OverwriteModelError" during hot reloads in Next.js
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
