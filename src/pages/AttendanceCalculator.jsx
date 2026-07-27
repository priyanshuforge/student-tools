import { useEffect, useState } from "react";

function AttendanceCalculator() {
  useEffect(() => {
    document.title =
      "Attendance Calculator Online | Calculate Attendance Percentage";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Free online attendance calculator for students. Calculate your attendance percentage and check how many classes you need to attend.",
      );
    }
  }, []);
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [result, setResult] = useState(null);

  const calculateAttendance = () => {
    const total = Number(totalClasses);
    const attended = Number(attendedClasses);

    if (
      !Number.isInteger(total) ||
      !Number.isInteger(attended) ||
      total <= 0 ||
      attended < 0 ||
      attended > total
    ) {
      alert("Please enter valid class details.");
      return;
    }

    const percentage = (attended / total) * 100;

    let classesNeeded = 0;
    let classesCanMiss = 0;

    if (percentage < 75) {
      classesNeeded = Math.ceil((0.75 * total - attended) / 0.25);
    } else {
      classesCanMiss = Math.floor(attended / 0.75 - total);
    }

    setResult({
      percentage: percentage.toFixed(2),
      classesNeeded,
      classesCanMiss,
    });
  };

  const resetCalculator = () => {
    setTotalClasses("");
    setAttendedClasses("");
    setResult(null);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h1 className="text-center mb-3">📅 Attendance Calculator</h1>

              <p className="text-center text-muted">
                Calculate your attendance and plan for 75%.
              </p>

              <div className="mb-3">
                <label className="form-label">Total Classes</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Example: 100"
                  value={totalClasses}
                  onChange={(e) => setTotalClasses(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Classes Attended</label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Example: 70"
                  value={attendedClasses}
                  onChange={(e) => setAttendedClasses(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-success"
                  onClick={calculateAttendance}
                >
                  Calculate Attendance
                </button>

                <button
                  className="btn btn-outline-secondary"
                  onClick={resetCalculator}
                >
                  Reset
                </button>
              </div>

              {result && (
                <div className="mt-4">
                  <div className="alert alert-primary text-center">
                    <h5>Current Attendance</h5>
                    <h2>{result.percentage}%</h2>
                  </div>

                  {Number(result.percentage) < 75 ? (
                    <div className="alert alert-warning text-center">
                      ⚠️ You need to attend the next{" "}
                      <strong>{result.classesNeeded} classes</strong>{" "}
                      continuously to reach 75%.
                    </div>
                  ) : (
                    <div className="alert alert-success text-center">
                      ✅ You have 75% or more attendance.
                      <br />
                      You can currently miss{" "}
                      <strong>{result.classesCanMiss} classes</strong> and
                      remain at or above 75%.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCalculator;
