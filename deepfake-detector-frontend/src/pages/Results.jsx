import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000); // simulate loader transition

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
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-center w-11/12 md:w-2/5 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Analysis Complete</h2>
        <p className="text-xl text-green-400 mb-2">Verdict: {verdict}</p>
        <p className="text-md text-blue-400">Avg. Fake Confidence: {avg_fake_confidence}%</p>
      </div>
    </div>
  );
}

export default Results;
