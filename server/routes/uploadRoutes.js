import express from "express";
import multer from "multer";
import { cloudinary } from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { saveImageFromUrl } from "../utils/saveImageFromUrl.js";

const router = express.Router();

// Multer + Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_uploads",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "gif"],
  },
});

const upload = multer({ storage });

// ---------------------------
// Normal file upload
// ---------------------------
router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  res.json({ imageUrl: req.file.path }); // Cloudinary URL
});

// ---------------------------
// URL upload
// ---------------------------
router.post("/url", async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) return res.status(400).json({ message: "No URL provided" });

    const uploadedUrl = await saveImageFromUrl(imageUrl);
    if (!uploadedUrl)
      return res.status(500).json({ message: "Failed to upload image from URL" });

    res.json({ imageUrl: uploadedUrl });
  } catch (err) {
    console.error("URL upload error:", err.message);
    res.status(500).json({ message: "Server error during URL upload" });
  }
});

export default router;
