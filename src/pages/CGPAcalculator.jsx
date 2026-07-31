import { useEffect, useState } from "react";
import SEO from "../components/SEO";
function CGPACalculator() {
  useEffect(() => {
    document.title = "CGPA Calculator Online | Convert CGPA to Percentage";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Free online CGPA calculator for students. Calculate CGPA and easily convert CGPA to percentage using different conversion formulas.",
      );
    }
  }, []);
  const [cgpa, setCgpa] = useState("");
  const [formula, setFormula] = useState("9.5");
  const [customMultiplier, setCustomMultiplier] = useState("");
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    const cgpaValue = Number(cgpa);

    if (cgpaValue < 0 || cgpaValue > 10 || cgpa === "") {
      alert("Please enter a valid CGPA between 0 and 10.");
      return;
    }

    let multiplier;

    if (formula === "custom") {
      multiplier = Number(customMultiplier);

      if (customMultiplier === "" || multiplier <= 0) {
        alert("Please enter a valid custom multiplier.");
        return;
      }
    } else {
      multiplier = Number(formula);
    }

    const result = cgpaValue * multiplier;

    setPercentage(result.toFixed(2));
  };

  const resetCalculator = () => {
    setCgpa("");
    setFormula("9.5");
    setCustomMultiplier("");
    setPercentage(null);
  };

  return (
    <>
      <SEO
        title="CGPA Calculator | Student Tools"
        description="Free CGPA Calculator. Calculate your CGPA instantly with accurate results."
        canonical="/cgpa-calculator"
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <h1 className="text-center mb-3">
                  📊 CGPA to Percentage Calculator
                </h1>

                <p className="text-center text-muted">
                  Convert your CGPA into percentage using the appropriate
                  conversion formula.
                </p>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Enter CGPA</label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Example: 8.5"
                    min="0"
                    max="10"
                    step="0.01"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Select Conversion Formula
                  </label>

                  <select
                    className="form-select"
                    value={formula}
                    onChange={(e) => {
                      setFormula(e.target.value);
                      setPercentage(null);
                    }}
                  >
                    <option value="9.5">CGPA × 9.5</option>

                    <option value="10">CGPA × 10</option>

                    <option value="custom">Custom Multiplier</option>
                  </select>
                </div>

                {formula === "custom" && (
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Enter Multiplier
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Example: 9.5"
                      value={customMultiplier}
                      onChange={(e) => setCustomMultiplier(e.target.value)}
                    />
                  </div>
                )}

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={calculatePercentage}
                  >
                    Calculate Percentage
                  </button>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={resetCalculator}
                  >
                    Reset
                  </button>
                </div>

                {percentage !== null && (
                  <div className="alert alert-success text-center mt-4">
                    <h5>Your Percentage</h5>

                    <h2 className="fw-bold">{percentage}%</h2>
                  </div>
                )}

                <div className="alert alert-warning mt-4 mb-0">
                  <strong>Note:</strong> CGPA-to-percentage conversion rules
                  vary by university. Always check your university's official
                  conversion formula before using the result for official
                  purposes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2>What is CGPA?</h2>
        <p>
          CGPA (Cumulative Grade Point Average) is the average of grade points
          obtained across all semesters. Many schools, colleges, and
          universities use CGPA instead of percentage to evaluate academic
          performance.
        </p>

        <h2>How to Convert CGPA into Percentage?</h2>
        <p>
          Most universities convert CGPA into percentage using a multiplier. For
          example:
        </p>

        <div className="alert alert-info">
          Percentage = CGPA × Conversion Factor
        </div>

        <p>If your university follows the CBSE formula, the conversion is:</p>

        <div className="alert alert-success">Percentage = CGPA × 9.5</div>

        <h2>Example</h2>

        <p>
          Suppose your CGPA is <strong>8.2</strong>.
        </p>

        <ul>
          <li>CGPA = 8.2</li>
          <li>Multiplier = 9.5</li>
        </ul>

        <p>
          Percentage = 8.2 × 9.5 =<strong> 77.90%</strong>
        </p>

        <h2>Frequently Asked Questions</h2>

        <h4>Is 9.5 formula valid for every university?</h4>

        <p>
          No. Different universities may use different conversion formulas.
          Always verify your university guidelines.
        </p>

        <h4>Can I use a custom multiplier?</h4>

        <p>
          Yes. This calculator lets you enter your own multiplier if your
          institution follows a different conversion rule.
        </p>

        <h4>What is a good CGPA?</h4>

        <p>
          Generally, a CGPA above 8 is considered very good, while 9+ is
          considered excellent in most institutions.
        </p>
      </div>
    </>
  );
}

export default CGPACalculator;
