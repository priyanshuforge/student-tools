import { useEffect, useState } from "react";

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

          <button className="btn btn-primary w-100" onClick={calculateAverage}>
            Calculate Average
          </button>

          {average !== null && (
            <div className="alert alert-success text-center mt-4">
              <strong>Average Marks: {average}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AverageCalculator;
