import { useState, useEffect } from "react";
import SEO from "../components/SEO";

function AverageCalculator() {
  useEffect(() => {
    document.title = "Average Calculator Online | Calculate Average Marks";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Free online average calculator for students. Calculate the average marks of multiple subjects quickly and easily.",
      );
    }
  }, []);
  const [marks, setMarks] = useState(["", "", ""]);
  const [average, setAverage] = useState(null);

  const handleChange = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  const addSubject = () => {
    setMarks([...marks, ""]);
  };

  const calculateAverage = () => {
    const validMarks = marks
      .map(Number)
      .filter((mark) => !isNaN(mark) && mark >= 0);

    if (validMarks.length === 0) {
      setAverage(null);
      return;
    }

    const total = validMarks.reduce((sum, mark) => sum + mark, 0);
    setAverage((total / validMarks.length).toFixed(2));
  };

  return (
    <>
      <SEO
        title="Average Marks Calculator | Student Tools"
        description="Free Average Marks Calculator. Calculate the average of multiple subject marks instantly and accurately."
        canonical="/average-calculator"
      />

      <div className="container py-5">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
          <div className="card-body p-4">
            <h1 className="text-center mb-3">📝 Marks Average Calculator</h1>

            <p className="text-center text-muted mb-4">
              Enter marks for each subject to calculate your average.
            </p>

            {marks.map((mark, index) => (
              <input
                key={index}
                type="number"
                className="form-control mb-3"
                placeholder={`Subject ${index + 1} Marks`}
                value={mark}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}

            <button
              className="btn btn-outline-primary w-100 mb-3"
              onClick={addSubject}
            >
              + Add Subject
            </button>

            <button
              className="btn btn-primary w-100"
              onClick={calculateAverage}
            >
              Calculate Average
            </button>

            {average !== null && (
              <div className="alert alert-success text-center mt-4">
                <strong>Average Marks: {average}</strong>
              </div>
            )}
            <div className="mt-5">
              <h2>How to Calculate Average Marks?</h2>

              <p>
                Average marks are calculated by adding the marks of all subjects
                and dividing the total by the number of subjects.
              </p>

              <h3>Formula</h3>

              <div className="alert alert-info">
                Average = Total Marks ÷ Number of Subjects
              </div>

              <h3>Example</h3>

              <p>Suppose your marks are:</p>

              <ul>
                <li>Math = 80</li>
                <li>Physics = 90</li>
                <li>Chemistry = 70</li>
              </ul>

              <p>
                Total = 80 + 90 + 70 = 240
                <br />
                Average = 240 ÷ 3 = <strong>80</strong>
              </p>

              <h3>Why use this calculator?</h3>

              <ul>
                <li>Instant average calculation</li>
                <li>No manual mistakes</li>
                <li>Unlimited subjects</li>
                <li>Free and easy to use</li>
              </ul>

              <h3>Frequently Asked Questions</h3>

              <h5>Can I calculate the average of 10 or more subjects?</h5>
              <p>
                Yes. Click "Add Subject" to include as many subjects as you
                want.
              </p>

              <h5>Does this calculator work for percentage marks?</h5>
              <p>
                Yes. It works with marks, percentages, and any numerical values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AverageCalculator;
