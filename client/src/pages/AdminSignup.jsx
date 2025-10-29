import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/useContext"; // ✅ adjust path if needed

const AdminSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { backendUrl } = useAppContext()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/admin/signup`, {
        username,
        password,
      });
      setMessage("Admin registered successfully!");
      console.log("Token:", res.data.token);
      setTimeout(() => navigate("/admin/login"), 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 shadow-2xl rounded-2xl space-y-5 w-96"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700">
          Admin Signup
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
          Sign Up
        </button>
        {message && <p className="text-center text-sm mt-3 text-gray-600">{message}</p>}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/admin/login")}
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default AdminSignup;
