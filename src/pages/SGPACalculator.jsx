import { useState } from "react";

function SGPACalculator() {
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
                onChange={(e) => handleChange(index, "credit", e.target.value)}
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
  );
}

export default SGPACalculator;
