import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data pengguna dari localStorage
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      alert("Belum ada pengguna yang terdaftar!");
      return;
    }

    // Verifikasi email dan password
    if (email === registeredUser.email && password === registeredUser.password) {
      alert("Login berhasil!");
      window.location.reload(); 
      localStorage.setItem("isAuthenticated", "true"); // Simpan status login
      navigate("/"); // Navigasi ke halaman utama
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
