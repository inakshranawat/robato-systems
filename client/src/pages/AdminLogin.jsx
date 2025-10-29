import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/useContext"; // ✅ adjust path if needed

const AdminLogin = () => {
  const { backendUrl } = useAppContext(); // ✅ use backendUrl from context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/admin/login`, {
        username,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      setMessage("Login successful!");
      setTimeout(() => navigate("/admin/panel"), 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-2xl rounded-2xl space-y-5 w-96"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white w-full py-3 rounded-lg hover:bg-indigo-700 transition-all"
        >
          Login
        </button>
        {message && (
          <p className="text-center text-sm mt-3 text-gray-600">{message}</p>
        )}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/admin/signup")}
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;

