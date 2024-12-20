import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({ phone: "", address: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data pengguna dari localStorage
    const user = localStorage.getItem("registeredUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData(parsedUser);
      setFormData({
        phone: parsedUser.phone || "",
        address: parsedUser.address || "",
      });
    } else {
      // Jika belum login, arahkan ke halaman login
      navigate("/login");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (userData) {
      const updatedUser = { ...userData, ...formData };
      setUserData(updatedUser);
      localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
      alert("Profil berhasil diperbarui!");
    }
  };

  if (!userData) {
    return null; // Jangan render apa-apa jika pengguna belum login
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Profil Pengguna</h2>
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">Nama:</p>
          <p className="text-gray-900">{userData.name}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">Email:</p>
          <p className="text-gray-900">{userData.email}</p>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block" htmlFor="phone">
            Nomor HP:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block" htmlFor="address">
            Alamat:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-500 focus:outline-none"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mb-4"
        >
          Simpan
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            alert("Anda telah logout.");
            window.location.reload();
            navigate("/login");
          }}
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
