import React from "react";
import { Link } from "react-router-dom";
import DefaultProfileImage from "../assets/profile kosong.jpg";

function Header() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const isLoggedIn = Boolean(user);

  return (
    <header className="bg-blue-600 p-4 flex items-center justify-between">
      <h1 className="text-white text-xl font-bold">
        <Link to="/">SnapRent</Link>
      </h1>
      <div className="flex items-center">
        {isLoggedIn && (
          <Link to="/profile">
            <img
              src={user?.profileImage || DefaultProfileImage} // Gunakan gambar default jika belum ada
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
