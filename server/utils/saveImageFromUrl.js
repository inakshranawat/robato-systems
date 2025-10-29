import { cloudinary } from "../config/cloudinary.js";
import axios from "axios";

export const saveImageFromUrl = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");
    const base64 = `data:image/jpeg;base64,${buffer.toString("base64")}`;

    const uploaded = await cloudinary.uploader.upload(base64, {
      folder: "blog_uploads",
    });

    return uploaded.secure_url; // Cloudinary URL
  } catch (err) {
    console.error("Failed to upload image from URL:", err.message);
    return null;
  }
};
