import { Link, useLocation } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const linkClasses = (path) =>
    `px-4 py-2 rounded-lg font-medium transition duration-300 ${
      location.pathname === path
        ? "bg-gray-700 text-white"
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`;
  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <ShieldCheck className="w-7 h-7 text-green-400" />
          <span className="text-3xl font-bold tracking-wide text-white">
            DeepShield
          </span>
        </Link>
        <div className="space-x-2 sm:space-x-4">
          <Link to="/upload" className={linkClasses("/upload")}>Upload</Link>
          <Link to="/about" className={linkClasses("/about")}>About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;