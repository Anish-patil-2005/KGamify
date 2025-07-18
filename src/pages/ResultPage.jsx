// ResultsPage.jsx
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ResultsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate(`/app/quiz/${id}`); // Redirect if no result data
    }
  }, [state, navigate, id]);

  if (!state) return null;

  const score = state.score;
  const total = state.total;

  // Dynamic message
  const getFeedback = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🏆 Perfect!";
    if (percentage >= 75) return "🎉 Great Job!";
    if (percentage >= 50) return "👍 Keep Going!";
    return "📚 Needs Improvement";
  };

  return (
    <div className="fixed inset-0 flex z-50 flex-col items-center justify-center p-6 bg-white text-gray-800">
      <div className="text-center max-w-md">
        <img src="/public/celebration-removebg-preview.png" alt="Result" className="w-40 h-40 mx-auto mb-6" />
        <h2 className="text-xl font-semibold">Your Score</h2>
        <p className="text-4xl font-bold text-orange-500 my-2">{score}/{total}</p>
        <h3 className="text-lg text-orange-400 font-semibold">{getFeedback()}</h3>
        <p className="text-sm mt-2 max-w-sm mx-auto">
          This is just a challenge, not the end. Learn, grow, and show 'em what you're made of!
        </p>
        <div className="mt-6 text-sm bg-gray-100 px-4 py-2 rounded-full inline-block">
          🪙 0.000 Coins
        </div>
        <div className="mt-6 w-full flex flex-col gap-3">
          <button
            className="border border-orange-400 text-orange-500 py-2 rounded"
            onClick={() => alert("Coming soon")}
          >
            View Analytics
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
            onClick={() => navigate("/app")}
          >
            Explore Championships
          </button>
        </div>
      </div>
    </div>
  );
}
