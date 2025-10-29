import express from "express";
import {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import { protectAdmin } from "../controllers/adminController.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../config/cloudinary.js";

const router = express.Router();

// Multer Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blog_uploads", // Cloudinary folder
    allowed_formats: ["jpg", "jpeg", "png", "webp", "gif"],
  },
});
const upload = multer({ storage });

// Public routes
router.get("/", getBlogs);
router.get("/:slug", getBlog);

// Admin routes (protected)
router.post("/", protectAdmin, upload.single("image"), createBlog);
router.put("/:id", protectAdmin, upload.single("image"), updateBlog);
router.delete("/:id", protectAdmin, deleteBlog);

export default router;
