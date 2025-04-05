import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // simulate loader transition

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center animate-pulse">
          <p className="text-lg">Analyzing video...</p>
        </div>
      </div>
    );
  }

  if (state?.error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white flex-col gap-6">
        <p className="text-red-400 text-xl font-semibold">{state.error}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  const { verdict, avg_fake_confidence } = state || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white">
      <div className="w-11/12 md:w-2/5 rounded-3xl p-8 md:p-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-white mb-6 tracking-wide">
          Analysis Complete
        </h2>
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-white">
            Verdict:{" "}
            <span
              className={`font-bold ${
                verdict.toLowerCase() === "fake"
                  ? "text-red-500"
                  : "text-green-400"
              }`}
            >
              {verdict}
            </span>
          </p>
          <p className="text-md text-blue-300">
            Avg. Fake Confidence:{" "}
            <span className="text-white font-medium">{avg_fake_confidence}%</span>
          </p>
        </div>
      </div>
    </div>
  );
  
  
  
}

export default Results;
