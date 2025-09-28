import Navbar from "../components/Navbar";
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
      <Navbar />
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-amber-800 mb-6">
          Login to My Library
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-amber-700 text-white rounded-lg shadow hover:bg-amber-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
