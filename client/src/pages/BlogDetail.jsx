import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from '@dr.pogodin/react-helmet'
import { AppContext } from "../context/AppContext"; // ✅ adjust path if needed

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { backendUrl } = useContext(AppContext); // ✅ using backendUrl from context

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogRes = await axios.get(`${backendUrl}/api/blogs/${slug}`);
        setBlog(blogRes.data);

        const allBlogsRes = await axios.get(`${backendUrl}/api/blogs`);
        const related = allBlogsRes.data.filter((b) => b.slug !== slug).slice(0, 6);
        setRelatedBlogs(related);

        setError("");
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Blog not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [slug, backendUrl]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading blog...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <p className="text-red-600 text-lg mb-4">{error || "Blog not found"}</p>
        <button
          onClick={() => navigate("/blogs")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  // ✅ Safe image URL
  const imageUrl = blog.image?.startsWith("http")
    ? blog.image
    : `${backendUrl.replace(/\/$/, "")}/${blog.image.replace(/^\//, "")}`;

  return (
    <>
      <Helmet>
  <title>{blog.title} | Robato Systems</title>
  <meta
    name="description"
    content={blog.description.replace(/<[^>]+>/g, "").slice(0, 150) + "..."}
  />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.description.replace(/<[^>]+>/g, "").slice(0, 300),
      "image": blog.image || "", // optional: URL of blog image
      "author": {
        "@type": "Organization",
        "name": "Robato Systems"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Robato Systems",
        "logo": {
          "@type": "ImageObject",
          "url": `${import.meta.env.VITE_BASE_URL}/logo.png` // replace with your logo URL
        }
      },
      "datePublished": blog.publishedAt,
      "dateModified": blog.updatedAt || blog.publishedAt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${import.meta.env.VITE_BASE_URL || window.location.origin}/blog/${blog.slug}`
      }
    })}
  </script>
</Helmet>


      <div id="main-content" className="bg-white min-h-screen">
        {/* Hero Image */}
        {blog.image && (
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
            <img
              src={imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
          </div>
        )}

        {/* Blog Meta + Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span className="font-medium">Written By:</span>
            <span className="font-bold text-gray-900">{blog.writtenBy}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <span className="font-medium">{blog.categoryName}</span>
            <span>/</span>
            <span>{formatDate(blog.date)}</span>
          </div>

          <div className="w-full py-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight uppercase">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            {relatedBlogs.length > 0 && (
              <div ref={sidebarRef} className="bg-gray-50 border rounded-xl shadow-sm p-6 sticky top-10">
                <h2 className="text-xl font-semibold text-indigo-700 mb-4 uppercase border-b pb-2">
                  Related Blogs
                </h2>
                <ul className="space-y-3">
                  {relatedBlogs.map((rel, index) => {
                    const relImageUrl = rel.image?.startsWith("http")
                      ? rel.image
                      : `${backendUrl.replace(/\/$/, "")}/${rel.image.replace(/^\//, "")}`;
                    return (
                      <li
                        key={rel.slug}
                        onClick={() => navigate(`/blog/${rel.slug}`)}
                        className="cursor-pointer p-3 rounded-lg hover:bg-indigo-100 transition flex items-center gap-3"
                      >
                        {rel.image && (
                          <img
                            src={relImageUrl}
                            alt={rel.title}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                        )}
                        <h3 className="text-gray-800 font-medium text-sm leading-snug">
                          {index + 1}. {rel.title}
                        </h3>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </aside>

          {/* Blog Description */}
          <main className="lg:col-span-8">
            <div
              className="prose prose-lg max-w-none break-words text-gray-800 leading-relaxed bg-white p-6 rounded-2xl shadow-sm"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            <div className="mt-8">
              <button
                onClick={() => navigate("/blogs")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                ← Back to Blogs
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
