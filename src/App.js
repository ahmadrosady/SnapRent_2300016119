import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./index.css";

function App() {
  // Cek apakah pengguna sudah login
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isAuthenticated && <Header />}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Home />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/" replace />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/register"
              element={
                isAuthenticated ? (
                  <Navigate to="/" replace />
                ) : (
                  <Register />
                )
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? (
                  <Profile />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
