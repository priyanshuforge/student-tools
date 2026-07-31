import { useEffect, useState } from "react";
import SEO from "../components/SEO";
function SGPACalculator() {
  useEffect(() => {
    document.title = "SGPA Calculator Online | Calculate Semester GPA";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Free online SGPA calculator for students. Calculate your semester grade point average using subject credits and grade points.",
      );
    }
  }, []);
  const [subjects, setSubjects] = useState([
    { credit: "", grade: "" },
    { credit: "", grade: "" },
    { credit: "", grade: "" },
  ]);

  const [sgpa, setSgpa] = useState(null);

  const handleChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { credit: "", grade: "" }]);
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      const credit = Number(subject.credit);
      const grade = Number(subject.grade);

      if (credit > 0 && grade >= 0 && grade <= 10) {
        totalCredits += credit;
        totalPoints += credit * grade;
      }
    });

    if (totalCredits === 0) {
      setSgpa("Please enter valid values");
      return;
    }

    const result = totalPoints / totalCredits;
    setSgpa(result.toFixed(2));
  };

  return (
    <>
      <SEO
        title="SGPA Calculator | Student Tools"
        description="Free SGPA Calculator. Calculate your semester GPA easily using subject credits and grades."
        canonical="/sgpa-calculator"
      />
      <div className="container mt-5 mb-5">
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "700px" }}>
          <h1 className="text-center mb-3">📚 SGPA Calculator</h1>

          <p className="text-center text-muted">
            Enter credit and grade point for each subject.
          </p>

          {subjects.map((subject, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-md-6 mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder={`Subject ${index + 1} Credit`}
                  value={subject.credit}
                  onChange={(e) =>
                    handleChange(index, "credit", e.target.value)
                  }
                />
              </div>

              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Grade Point (0-10)"
                  min="0"
                  max="10"
                  value={subject.grade}
                  onChange={(e) => handleChange(index, "grade", e.target.value)}
                />
              </div>
            </div>
          ))}

          <button className="btn btn-outline-primary mb-3" onClick={addSubject}>
            + Add Subject
          </button>

          <button className="btn btn-primary" onClick={calculateSGPA}>
            Calculate SGPA
          </button>

          {sgpa !== null && (
            <div className="alert alert-success text-center mt-4">
              <strong>Your SGPA: {sgpa}</strong>
            </div>
          )}
        </div>
      </div>
      <div className="container mt-5">
        <h2>SGPA Calculator</h2>

        <p>
          This free SGPA Calculator helps students calculate their Semester
          Grade Point Average quickly and accurately. Enter your subject credits
          and grade points to get your SGPA instantly.
        </p>

        <h2>SGPA Formula</h2>

        <div className="alert alert-info">
          SGPA = Sum of (Credit × Grade Point) ÷ Total Credits
        </div>

        <h2>Example</h2>

        <p>Suppose you have the following subjects:</p>

        <ul>
          <li>Subject 1: Credit = 4, Grade Point = 9</li>
          <li>Subject 2: Credit = 3, Grade Point = 8</li>
          <li>Subject 3: Credit = 3, Grade Point = 10</li>
        </ul>

        <p>
          Total Credit Points = (4 × 9) + (3 × 8) + (3 × 10) = 90
          <br />
          Total Credits = 10
          <br />
          <strong>SGPA = 90 ÷ 10 = 9.0</strong>
        </p>

        <h2>Benefits of using this SGPA Calculator</h2>

        <ul>
          <li>Fast and accurate calculations</li>
          <li>Supports multiple subjects</li>
          <li>Works on mobile and desktop</li>
          <li>Completely free to use</li>
          <li>No registration required</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h4>What is SGPA?</h4>

        <p>
          SGPA (Semester Grade Point Average) represents your academic
          performance in a single semester based on credits and grade points.
        </p>

        <h4>Is SGPA the same as CGPA?</h4>

        <p>
          No. SGPA is calculated for one semester, whereas CGPA is the
          cumulative average of all semesters.
        </p>

        <h4>Can I use this calculator for any university?</h4>

        <p>
          Yes. As long as your university uses the credit and grade point
          system, this calculator can be used.
        </p>
      </div>
    </>
  );
}

export default SGPACalculator;
