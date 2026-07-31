import { useEffect, useState } from "react";
import SEO from "../components/SEO";
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
    <>
      <SEO
        title="Percentage Calculator | Student Tools"
        description="Free Percentage Calculator for students. Calculate percentages instantly with accurate results."
        canonical="/percentage-calculator"
      />

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
      <div className="container mt-5">
        <h2>Percentage Calculator</h2>

        <p>
          This free Percentage Calculator helps students calculate their
          percentage from obtained marks and total marks instantly. Simply enter
          your marks and total marks to get accurate results.
        </p>

        <h2>Percentage Formula</h2>

        <div className="alert alert-info">
          Percentage = (Obtained Marks ÷ Total Marks) × 100
        </div>

        <h2>Example</h2>

        <p>Suppose a student scores:</p>

        <ul>
          <li>Obtained Marks = 450</li>
          <li>Total Marks = 500</li>
        </ul>

        <p>
          Percentage = (450 ÷ 500) × 100 =<strong> 90%</strong>
        </p>

        <h2>Why use this Percentage Calculator?</h2>

        <ul>
          <li>Instant calculation</li>
          <li>100% free</li>
          <li>Mobile friendly</li>
          <li>Accurate results</li>
          <li>No signup required</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h4>How do I calculate percentage?</h4>

        <p>
          Divide the obtained marks by the total marks and multiply the result
          by 100.
        </p>

        <h4>Can I calculate exam percentage?</h4>

        <p>
          Yes. This calculator works for school exams, college exams, university
          results, and competitive tests.
        </p>

        <h4>Is this calculator free?</h4>

        <p>Yes. It is completely free and works on all devices.</p>
      </div>
    </>
  );
}

export default PercentageCalculator;
