import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass =
    "hover:text-amber-700 transition font-medium";

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-amber-800 flex items-center gap-2"
        >
          <span className="text-3xl">📚</span> My Library
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/library" className={navLinkClass}>
            Library
          </NavLink>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
        </nav>

        {/* Mobile Menu Button (not wired yet) */}
        <button className="md:hidden p-2 border rounded">☰</button>
      </div>
    </header>
  );
}
