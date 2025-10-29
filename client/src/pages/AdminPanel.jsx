import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/useContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminPanel() {
  const navigate = useNavigate();
  const editor = useRef(null);
  const { backendUrl } = useAppContext();

  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [freeTrials, setFreeTrials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageOption, setImageOption] = useState("file");
  const [categoryName, setCategoryName] = useState("");
  const [writtenBy, setWrittenBy] = useState("");
  const [editId, setEditId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchData();
  }, [token, navigate, backendUrl]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await Promise.all([fetchBlogs(), fetchContacts(), fetchFreeTrials()]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/blogs`);
      setBlogs(res.data || []);
    } catch (err) {
      console.error("Fetch blogs error:", err);
      if (err.response?.status === 401) handleUnauthorized();
      else toast.error("Failed to fetch blogs");
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/contacts`);
      setContacts(res.data || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      if (err.response?.status === 401) handleUnauthorized();
      else toast.error("Failed to fetch contact submissions");
    }
  };

  const fetchFreeTrials = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/free-trials`);
      setFreeTrials(res.data || []);
    } catch (err) {
      console.error("Error fetching free trials:", err);
      if (err.response?.status === 404) {
        try {
          const res = await axios.get(`${backendUrl}/api/trials`);
          setFreeTrials(res.data || []);
          return;
        } catch (err2) {
          console.error("Alternate endpoint also failed:", err2);
        }
      }
      if (err.response?.status === 401) handleUnauthorized();
      else toast.error("Failed to fetch free trial submissions");
    }
  };

  const handleUnauthorized = () => {
    localStorage.removeItem("adminToken");
    delete axios.defaults.headers.common["Authorization"];
    toast.error("Session expired. Please login again.");
    navigate("/admin/login");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const uploadFileToCloudinary = async (file) => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(`${backendUrl}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data.imageUrl;
    } catch (err) {
      console.error("Upload error:", err);
      throw err;
    }
  };

  const uploadUrlToCloudinary = async (url) => {
    if (!url) return null;
    try {
      const res = await axios.post(`${backendUrl}/api/upload/url`, { imageUrl: url });
      return res.data.imageUrl;
    } catch (err) {
      console.error("URL Upload error:", err);
      throw err;
    }
  };

  const validateForm = () => {
    if (!title.trim()) {
      toast.error("Title is required");
      return false;
    }
    if (!slug.trim()) {
      toast.error("Slug is required");
      return false;
    }
    if (!description.trim()) {
      toast.error("Description is required");
      return false;
    }
    if (!categoryName.trim()) {
      toast.error("Category is required");
      return false;
    }
    if (!writtenBy.trim()) {
      toast.error("Author name is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      let finalImageUrl = null;
      if (imageOption === "file" && image) {
        finalImageUrl = await uploadFileToCloudinary(image);
      } else if (imageOption === "url" && imageUrl.trim()) {
        finalImageUrl = await uploadUrlToCloudinary(imageUrl.trim());
      } else if (editId) {
        const existingBlog = blogs.find((b) => b._id === editId);
        finalImageUrl = existingBlog?.image;
      }

      const blogData = {
        title: title.trim(),
        slug: slug.trim(),
        description,
        image: finalImageUrl || "",
        categoryName: categoryName.trim(),
        writtenBy: writtenBy.trim(),
      };

      if (!editId) blogData.date = new Date();

      if (editId) {
        await axios.put(`${backendUrl}/api/blogs/${editId}`, blogData);
        toast.success("Blog updated successfully!");
      } else {
        await axios.post(`${backendUrl}/api/blogs`, blogData);
        toast.success("Blog created successfully!");
      }

      resetForm();
      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog:", err);
      if (err.response?.status === 401) handleUnauthorized();
      else toast.error(err.response?.data?.message || "Error saving blog");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setDescription("");
    setImage(null);
    setImageUrl("");
    setImageOption("file");
    setCategoryName("");
    setWrittenBy("");
    setEditId(null);
  };

  const handleEdit = (blog) => {
    setEditId(blog._id);
    setTitle(blog.title || "");
    setSlug(blog.slug || "");
    setDescription(blog.description || "");
    setImageUrl(blog.image || "");
    setCategoryName(blog.categoryName || "");
    setWrittenBy(blog.writtenBy || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.info("Editing mode activated");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${backendUrl}/api/blogs/${id}`);
      toast.success("Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      console.error("Delete error:", err);
      if (err.response?.status === 401) handleUnauthorized();
      else toast.error("Error deleting blog");
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact submission?")) return;
    try {
      await axios.delete(`${backendUrl}/api/contacts/${id}`);
      toast.success("Contact submission deleted successfully!");
      fetchContacts();
    } catch (err) {
      console.error("Delete contact error:", err);
      if (err.response?.status === 401) handleUnauthorized();
      else toast.error("Error deleting contact submission");
    }
  };

  const handleDeleteTrial = async (id) => {
    if (!window.confirm("Are you sure you want to delete this free trial submission?")) return;
    try {
      await axios.delete(`${backendUrl}/api/free-trials/${id}`);
      toast.success("Free trial submission deleted successfully!");
      fetchFreeTrials();
    } catch (err) {
      if (err.response?.status === 404) {
        try {
          await axios.delete(`${backendUrl}/api/trials/${id}`);
          toast.success("Free trial submission deleted successfully!");
          fetchFreeTrials();
          return;
        } catch (err2) {
          console.error("Alternate delete endpoint failed:", err2);
        }
      }
      console.error("Delete free trial error:", err);
      if (err.response?.status === 401) handleUnauthorized();
      else toast.error("Error deleting free trial submission");
    }
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      setImage(file);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} theme="light" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto p-4 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-6 mb-8 border border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-zinc-600 to-indigo-500 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 mt-2">Manage your content and submissions</p>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("adminToken");
                  delete axios.defaults.headers.common["Authorization"];
                  navigate("/admin/login");
                }}
                className="px-6 py-3 bg-gradient-to-r from-red-900 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-zinc-800 to-blue-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <p className="text-blue-100 text-sm font-medium">Total Blogs</p>
                <p className="text-4xl font-bold mt-2">{blogs.length}</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-600 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <p className="text-purple-100 text-sm font-medium">Contact Submissions</p>
                <p className="text-4xl font-bold mt-2">{contacts.length}</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-800 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-white">
                <p className="text-pink-100 text-sm font-medium">Free Trial Requests</p>
                <p className="text-4xl font-bold mt-2">{freeTrials.length}</p>
              </div>
            </div>
          </div>

          {/* BLOG MANAGEMENT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 sm:p-10 mb-10 border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-zinc-600 to-indigo-600 bg-clip-text text-transparent">
              {editId ? "✏️ Edit Blog" : "✨ Create New Blog"}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Title */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  placeholder="Enter an engaging blog title"
                  required
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Slug <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 font-mono text-sm"
                  placeholder="blog-url-slug"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  placeholder="e.g., Technology, Lifestyle"
                  required
                />
              </div>

              {/* Author */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Written By <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={writtenBy}
                  onChange={(e) => setWrittenBy(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  placeholder="Author name"
                  required
                />
              </div>

              {/* Image Upload Options */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Featured Image</label>
                <div className="flex gap-6 mb-4">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      value="file"
                      checked={imageOption === "file"}
                      onChange={(e) => setImageOption(e.target.value)}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Upload File</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      value="url"
                      checked={imageOption === "url"}
                      onChange={(e) => setImageOption(e.target.value)}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Image URL</span>
                  </label>
                </div>

                {imageOption === "file" ? (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                  />
                ) : (
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    placeholder="https://example.com/image.jpg"
                  />
                )}
              </div>
            </div>

            {/* Description Editor */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <div className="rounded-xl overflow-hidden border-2 border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-300">
                <JoditEditor
                  ref={editor}
                  value={description}
                  onBlur={(newContent) => setDescription(newContent)}
                  config={{
                    readonly: false,
                    placeholder: "Write your blog content here...",
                    minHeight: 400,
                  }}
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-800 hover:shadow-2xl hover:scale-105"
                }`}
              >
                {isSubmitting ? "⏳ Saving..." : editId ? "💾 Update Blog" : " Create Blog"}
              </button>
              {editId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  ✖️ Cancel Edit
                </button>
              )}
            </div>
          </form>

          {/* EXISTING BLOGS */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-zinc-800 to-indigo-400 bg-clip-text text-transparent">
              📚 Existing Blogs ({blogs.length})
            </h2>
            <div className="space-y-4">
              {blogs.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-lg p-12 rounded-2xl text-center shadow-lg border border-white/20">
                  <p className="text-gray-500 text-lg">No blogs yet. Create your first one! 🎉</p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/20"
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-2">{blog.title}</h3>
                        <p className="text-sm text-blue-600 font-mono mb-2">/{blog.slug}</p>
                        <p className="text-gray-500 text-sm mb-3">📅 {formatDate(blog.date)}</p>
                        <div className="flex flex-wrap gap-2 items-center">
                          {blog.categoryName && (
                            <span className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1.5 rounded-full font-medium shadow-sm">
                              {blog.categoryName}
                            </span>
                          )}
                          {blog.writtenBy && (
                            <span className="text-xs text-gray-600 font-medium">✍️ by {blog.writtenBy}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="px-5 py-2.5 bg-gradient-to-r from-yellow-800 to-orange-500 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="px-5 py-2.5 bg-gradient-to-r from-red-800 to-pink-800 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* CONTACT FORM SUBMISSIONS */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl mb-10 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-zinc-800 to-pink-600 bg-clip-text text-transparent">
               Contact Form Submissions ({contacts.length})
            </h2>

            {contacts.length === 0 ? (
              <p className="text-gray-500 text-center py-8 text-lg">No contact form submissions yet.</p>
            ) : (
              <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-zinc-700 to-gray-500 text-white">
                      <th className="p-4 text-left font-semibold rounded-tl-xl">Name</th>
                      <th className="p-4 text-left font-semibold">Email</th>
                      <th className="p-4 text-left font-semibold">Message</th>
                      <th className="p-4 text-left font-semibold">Date</th>
                      <th className="p-4 text-left font-semibold rounded-tr-xl">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((c, idx) => (
                      <tr key={c._id} className={`${idx % 2 === 0 ? 'bg-purple-50/50' : 'bg-white'} hover:bg-purple-100/70 transition-colors duration-200`}>
                        <td className="p-4 font-medium text-gray-800">
                          {`${c.firstName || ""} ${c.lastName || ""}`.trim() || c.name || "N/A"}
                        </td>
                        <td className="p-4">
                          <a href={`mailto:${c.email}`} className="text-zinc-800 hover:text-purple-900 hover:underline font-medium">
                            {c.email}
                          </a>
                        </td>
                        <td className="p-4 max-w-xs truncate text-zinc-800" title={c.message}>
                          {c.message}
                        </td>
                        <td className="p-4 whitespace-nowrap text-zinc-800 text-sm">{formatDate(c.createdAt)}</td>
                        <td className="p-4">
                          <button
                            onClick={() => handleDeleteContact(c._id)}
                            className="bg-gradient-to-r from-red-800 to-pink-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* FREE TRIAL SUBMISSIONS */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-zinc-800 to-rose-600 bg-clip-text text-transparent">
               Free Trial Submissions ({freeTrials.length})
            </h2>

            {freeTrials.length === 0 ? (
              <p className="text-gray-500 text-center py-8 text-lg">No free trial submissions yet.</p>
            ) : (
              <div className="overflow-x-auto rounded-xl">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-zinc-800 to-rose-950 text-white">
                      <th className="p-4 text-left font-semibold rounded-tl-xl">Name</th>
                      <th className="p-4 text-left font-semibold">Email</th>
                      <th className="p-4 text-left font-semibold">Phone</th>
                      <th className="p-4 text-left font-semibold">Company</th>
                      <th className="p-4 text-left font-semibold">Message</th>
                      <th className="p-4 text-left font-semibold">Date</th>
                      <th className="p-4 text-left font-semibold rounded-tr-xl">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {freeTrials.map((t, idx) => (
                      <tr key={t._id} className={`${idx % 2 === 0 ? 'bg-pink-50/50' : 'bg-white'} hover:bg-pink-100/70 transition-colors duration-200`}>
                        <td className="p-4 font-medium text-gray-800">
                          {`${t.firstName || ""} ${t.lastName || ""}`.trim() || t.name || "N/A"}
                        </td>
                        <td className="p-4">
                          <a href={`mailto:${t.email}`} className="text-zinc-800 hover:text-indigo-800 hover:underline font-medium">
                            {t.email}
                          </a>
                        </td>
                        <td className="p-4">
                          {t.phone ? (
                            <a href={`tel:${t.phone}`} className="text-zinc-800 hover:text-indigo-800 hover:underline font-medium">
                              {t.phone}
                            </a>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="p-4 text-gray-600">{t.company || "-"}</td>
                        <td className="p-4 max-w-xs truncate text-gray-600" title={t.message}>{t.message || "-"}</td>
                        <td className="p-4 whitespace-nowrap text-gray-600 text-sm">{formatDate(t.createdAt)}</td>
                        <td className="p-4">
                          <button
                            onClick={() => handleDeleteTrial(t._id)}
                            className="bg-gradient-to-r from-red-800 to-pink-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}