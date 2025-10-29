import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from '@dr.pogodin/react-helmet'
import { useAppContext } from "../context/useContext";

const Sitemap = () => {
  const { backendUrl } = useAppContext();
  const [blogs, setBlogs] = useState([]);
  const [routes, setRoutes] = useState({
    static: [],
    solutions: [],
    products: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch routes from backend
        const routesRes = await axios.get(`${backendUrl}/api/routes`);
        setRoutes(routesRes.data);

        // Fetch blogs from backend
        const blogsRes = await axios.get(`${backendUrl}/api/blogs`);
        setBlogs(blogsRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [backendUrl]);

  const renderSection = (title, routesList) => (
    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 mb-8">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">{title}</h2>
      {routesList.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2">
          {routesList.map((route) => (
            <li key={route.path}>
              <a
                href={route.path}
                className="text-gray-800 hover:text-indigo-600 hover:underline transition"
              >
                {route.name} ({route.path})
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No routes available</p>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 sm:p-10 text-center">
        <p className="text-gray-600">Loading sitemap...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Sitemap | MachinoX Pro | Robato Systems</title>
        <meta
          name="description"
          content="Explore the comprehensive sitemap of MachinoX Pro for easy navigation and discovery. Find valuable content, products, solutions, and blogs."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Sitemap
        </h1>

        {renderSection("Static Pages", routes.static)}
        {renderSection("Solutions", routes.solutions)}
        {renderSection("Products", routes.products)}

        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Blogs</h2>
          {blogs.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {blogs.map((blog) => (
                <li key={blog.slug}>
                  <a
                    href={`/blog/${blog.slug}`}
                    className="text-gray-800 hover:text-indigo-600 hover:underline transition"
                  >
                    {blog.title} (/blog/{blog.slug})
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No blogs available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Sitemap;
