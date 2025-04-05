import { Link } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ArrowUpTrayIcon, ShieldExclamationIcon, DocumentCheckIcon, ClockIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center px-6 py-12">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-12 md:p-20 max-w-6xl w-full relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left: Removed Upload Section */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-2">
              <ShieldExclamationIcon className="h-4 w-4 mr-2" />
              <span>Verify Media Authenticity</span>
            </div>

            <h2 className="text-white text-2xl font-semibold mb-4">Ready to check a video?</h2>
            <p className="text-gray-300">Click the button below to upload and analyze your media.</p>
            <Link
              to="/upload"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-md transition-all shadow-md w-full md:w-auto justify-center group"
            >
              <span>Go to Upload</span>
              <ArrowUpTrayIcon className="h-5 w-5 ml-2  group-hover:translate-y-[-2px] transition-transform" />
            </Link>
          </div>

          {/* Right: Project Info */}
          <div className="text-white text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <h1 className="text-4xl md:text-5xl font-bold">DeepShield</h1>
              <ShieldCheckIcon className="h-10 w-10 ml-3 text-green-400" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              DeepShield helps you detect AI-generated deepfake videos in seconds. Powered by deep learning, it's your
              first line of defense against misinformation.
            </p>

            {/* Moved badge here */}
            <div className="text-xs   text-gray-300 bg-white/5 px-3 py-1 rounded-full backdrop-blur-md mb-6  inline-block">
              Trusted by journalists, researchers, and content platforms
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2"> {/* Adjusted mt value */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <DocumentCheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-sm font-medium">High Accuracy</span>
                </div>
                <p className="text-xs text-gray-400">95%+ detection rate for manipulated media</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <ClockIcon className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-sm font-medium">Real-time</span>
                </div>
                <p className="text-xs text-gray-400">Results in seconds, not minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Removed the original bottom badge */}
      </div>
    </div>
  );
}

export default Home;