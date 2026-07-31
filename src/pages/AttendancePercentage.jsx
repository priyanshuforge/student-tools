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
        <h2 className="mt-5">Attendance Percentage Calculator Formula</h2>

        <p>The standard attendance percentage formula is:</p>

        <div className="alert alert-success">
          <strong>
            Attendance % = (Classes Attended ÷ Total Classes) × 100
          </strong>
        </div>

        <h2>Attendance Percentage Table</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Classes Attended</th>
              <th>Total Classes</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>45</td>
              <td>50</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>72</td>
              <td>80</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>96</td>
              <td>120</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>150</td>
              <td>180</td>
              <td>83.33%</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>

        <h4>How do I calculate attendance percentage?</h4>
        <p>
          Divide the number of classes attended by the total number of classes
          and multiply the result by 100.
        </p>

        <h4>What is the minimum attendance required?</h4>
        <p>
          Many schools and universities require at least 75% attendance, but the
          requirement varies by institution.
        </p>

        <h4>How much attendance is 90 out of 120 classes?</h4>
        <p>(90 ÷ 120) × 100 = 75% attendance.</p>

        <h2>Conclusion</h2>

        <p>
          Attendance percentage helps students monitor eligibility for exams and
          maintain academic requirements. You can also use our Attendance
          Calculator to instantly calculate your attendance without doing manual
          calculations.
        </p>
      </div>
    </>
  );
}

export default AttendancePercentage;
