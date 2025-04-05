import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center px-6 py-12">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 md:p-16 max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Upload Button */}
          <div className="text-center md:text-left">
            <Link
              to="/upload"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-md transition-all shadow-md"
            >
              Upload a Video
            </Link>
          </div>

          {/* Right: Project Info */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DeepShield</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              DeepShield helps you detect AI-generated deepfake videos in seconds.
              Powered by deep learning, it's your first line of defense against misinformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
