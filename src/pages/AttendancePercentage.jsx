import SEO from "../components/SEO";

function AttendancePercentage() {
  return (
    <>
      <SEO
        title="How to Calculate Attendance Percentage | StudentTools"
        description="Learn how to calculate attendance percentage with formula, examples and easy explanation."
        canonical="/blog/attendance-percentage"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        <h1>How to Calculate Attendance Percentage</h1>

        <p>
          Attendance percentage tells you how many classes you attended out of
          the total classes conducted.
        </p>

        <h2>Formula</h2>

        <div className="alert alert-info">
          <strong>
            Attendance % = (Classes Attended ÷ Total Classes) × 100
          </strong>
        </div>

        <h2>Example</h2>

        <p>Total Classes = 120</p>
        <p>Classes Attended = 96</p>

        <p>
          Attendance = (96 ÷ 120) × 100 = <strong>80%</strong>
        </p>

        <h2>Why is Attendance Important?</h2>

        <ul>
          <li>Eligible for examinations</li>
          <li>Better academic performance</li>
          <li>Avoid attendance shortage</li>
        </ul>

        <h2>Use our Attendance Calculator</h2>

        <p>
          Our Attendance Calculator instantly tells you your attendance and how
          many classes you need to attend.
        </p>
      </div>
    </>
  );
}

export default AttendancePercentage;
