import Blog from "../models/Blog.js";

// Helper function to remove HTML tags safely
const stripHTML = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
};

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const { title, slug, description, image, categoryName, writtenBy, date } = req.body;

    if (!title || !slug || !description || !image || !categoryName || !writtenBy) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contentText = stripHTML(description);

    const blog = await Blog.create({
      title,
      slug,
      description, // HTML version
      contentText, // plain text version
      image,
      categoryName,
      writtenBy,
      date: date || new Date(),
    });

    res.status(201).json(blog);
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const { title, slug, description, image, categoryName, writtenBy, date } = req.body;

    if (!title || !slug || !description || !image || !categoryName || !writtenBy) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contentText = stripHTML(description);

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        slug,
        description, // HTML
        contentText, // plain text
        image,
        categoryName,
        writtenBy,
        date: date || new Date(),
      },
      { new: true }
    );

    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL BLOGS
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE BLOG (by slug)
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
