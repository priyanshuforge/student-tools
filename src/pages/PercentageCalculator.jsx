import { useEffect, useState } from "react";
function PercentageCalculator() {
  useEffect(() => {
    document.title = "Percentage Calculator Online | Calculate Percentage";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Free online percentage calculator for students. Calculate your percentage easily from obtained marks and total marks.",
      );
    }
  }, []);
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    const obtained = parseFloat(obtainedMarks);
    const total = parseFloat(totalMarks);

    if (
      isNaN(obtained) ||
      isNaN(total) ||
      total <= 0 ||
      obtained < 0 ||
      obtained > total
    ) {
      alert("Please enter valid marks.");
      return;
    }

    const result = (obtained / total) * 100;
    setPercentage(result.toFixed(2));
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "650px" }}>
        <div className="card-body p-4">
          <h1 className="text-center mb-3">📊 Percentage Calculator</h1>

          <p className="text-center text-muted mb-4">
            Calculate your percentage from obtained and total marks.
          </p>

          <div className="mb-3">
            <label className="form-label">Obtained Marks</label>
            <input
              type="number"
              className="form-control"
              placeholder="Example: 450"
              value={obtainedMarks}
              onChange={(e) => setObtainedMarks(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Total Marks</label>
            <input
              type="number"
              className="form-control"
              placeholder="Example: 500"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={calculatePercentage}
          >
            Calculate Percentage
          </button>

          {percentage !== null && (
            <div className="alert alert-success text-center mt-4">
              <h3 className="mb-0">Your Percentage: {percentage}%</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PercentageCalculator;
