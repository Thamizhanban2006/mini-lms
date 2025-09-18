import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  completedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Track progress
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
