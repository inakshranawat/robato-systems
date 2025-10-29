// models/Blog.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true }, // full HTML from Jodit
  contentText: { type: String }, // plain text version
  image: { type: String },
  categoryName: { type: String },
  writtenBy: { type: String },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);
