import React, { useEffect, useState } from "react";

function Home() {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    // Fetch data kamera dari file cameras.json
    fetch("/cameras.json")
      .then((response) => response.json())
      .then((data) => setCameras(data))
      .catch((error) => console.error("Error fetching cameras:", error));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Selamat Datang di SnapRent!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.length > 0 ? (
          cameras.map((camera) => (
            <div
              key={camera.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={camera.image}
                alt={camera.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{camera.name}</h2>
              <p className="text-gray-600 mb-4">{camera.description}</p>
              <p className="text-blue-600 font-bold">Rp {camera.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            Memuat daftar kamera...
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
