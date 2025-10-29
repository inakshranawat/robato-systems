import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAppContext } from "../context/useContext";
import { Helmet } from '@dr.pogodin/react-helmet'

// Utility: extract plain text from HTML for preview
function getTextPreview(html, maxChars = 200) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const { backendUrl } = useAppContext(); // ✅ using from context

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/blogs`);
        setBlogs(res.data);
        setError("");
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [backendUrl]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <>
     <Helmet>
  <title>Revolutionizing Efficiency: Explore Robato Systems on Our Blog</title>
  <meta
    name="description"
    content="Stay ahead with MachinoX Pro's blog on automation and robotics. Dive into industry insights, cutting-edge technology, and innovation."
  />
  <script type="application/ld+json">
    {JSON.stringify( {
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/blogs`
          },
          "headline": "Revolutionizing Efficiency: Explore Robato Systems on Our Blog",
          "description": "tay ahead with MachinoX pros' blog on automation and robotics. Dive into industry insights, cutting-edge technology, and innovation.",
          "image": {
            "@type": "ImageObject",
            "url": "",
            "width": "",
            "height": ""
          },
          "author": {
            "@type": "Organization",
            "name": "Robato Systems Pvt. Ltd."
          },
          "publisher": {
            "@type": "Organization",
            "name": "Robato Systems Pvt. Ltd.",
            "logo": {
              "@type": "ImageObject",
              "url": `${import.meta.env.VITE_BASE_URL}/logo.png`,
              "width": "350",
              "height": "60"
            }
          },
          "datePublished": "2025-10-28",
          "dateModified": "2025-10-28"
        })}
  </script>
</Helmet>


      <div className="bg-[#2e2e2e] min-h-screen py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8 leading-tight">
          UNLOCKING TOMORROW'S POTENTIAL: <br /> ROBATO SYSTEMS BLOG
        </h1>

        {/* 🔍 Search Bar Section */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search blog by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-xl bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-600 focus:border-purple-600 focus:ring-2 focus:ring-purple-700 focus:outline-none transition-all duration-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.85-5.15A7 7 0 1110 4a7 7 0 018.5 8.5z"
              />
            </svg>
          </div>
        </div>

        {/* 📰 Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => {
              const imageUrl = blog.image?.startsWith("http")
                ? blog.image
                : `${backendUrl.replace(/\/$/, "")}/${blog.image.replace(
                    /^\//,
                    ""
                  )}`;

              return (
                <div
                  key={blog.slug}
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl cursor-pointer overflow-hidden transform transition-all duration-300 hover:-translate-y-1"
                >
                  {blog.image && (
                    <img
                      src={imageUrl}
                      alt={blog.title}
                      className="w-full h-56 object-cover rounded-t-2xl"
                    />
                  )}

                  <div className="p-5">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {blog.categoryName}
                    </span>

                    <h2 className="text-lg font-semibold text-purple-800 hover:text-purple-900 hover:underline mb-2">
                      {blog.title}
                    </h2>

                    <p className="text-gray-700 text-sm line-clamp-3 break-words whitespace-pre-wrap">
                      {getTextPreview(blog.description, 200)}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-400 text-center col-span-full text-lg">
              No blogs found matching your search.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
