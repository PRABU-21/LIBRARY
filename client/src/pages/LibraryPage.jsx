import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LibraryPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/");

      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        navigate("/");
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50">
      {user ? (
        <>
          <img
            src={user.avatar || "https://via.placeholder.com/100"}
            alt="avatar"
            className="w-20 h-20 rounded-full mb-4 shadow"
          />
          <h1 className="text-3xl font-bold text-amber-800">
            📚 Welcome, {user.name}!
          </h1>
          <p className="mt-2 text-gray-600">Manage your books with ease.</p>
        </>
      ) : (
        <p className="text-gray-600">Loading your library...</p>
      )}
    </div>
  );
}
