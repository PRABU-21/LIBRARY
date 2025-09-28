import { useEffect, useState } from "react";

export default function LibraryPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50">
      {user ? (
        <>
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
