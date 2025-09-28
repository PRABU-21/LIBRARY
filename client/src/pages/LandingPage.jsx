import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 via-amber-100 to-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 py-20 md:py-28">
        <div className="max-w-xl text-center md:text-left space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-700 to-yellow-500 bg-clip-text text-transparent leading-tight">
            Your Personal <br /> Digital Library
          </h2>
          <p className="text-lg text-gray-700">
            Organize your books, track your reading progress, and rediscover the
            joy of reading with your very own library manager.
          </p>

          {/* Buttons that link to routes */}
          <div className="space-x-4">
            <Link
              to="/library"
              className="px-6 py-3 bg-amber-700 text-white rounded-lg shadow-lg hover:bg-amber-800 transition transform hover:-translate-y-0.5 inline-block"
            >
              Start Managing
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 border border-amber-700 text-amber-700 rounded-lg hover:bg-amber-50 transition inline-block"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-12 md:mt-0 md:ml-12 relative">
          <div className="w-80 h-80 bg-gradient-to-tr from-amber-200 to-yellow-100 rounded-2xl shadow-lg flex items-center justify-center text-7xl">
            📖
          </div>
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-white shadow rounded-full flex items-center justify-center text-3xl">
            📕
          </div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white shadow rounded-full flex items-center justify-center text-2xl">
            📗
          </div>
        </div>
      </section>
    </div>
  );
}
