import Navbar from "../components/Navbar";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-amber-800">📚 My Library</h1>
        <p className="mt-4 text-gray-600">
          This is where your personal library manager will live.
        </p>
      </div>
    </div>
  );
}
