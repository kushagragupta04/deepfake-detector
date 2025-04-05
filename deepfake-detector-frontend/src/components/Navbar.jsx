import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">DeepfakeDefense</Link>
      <div className="space-x-4">
        <Link to="/upload">Upload</Link>
        <Link to="/results">Results</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar ;