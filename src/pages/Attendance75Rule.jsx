import SEO from "../components/SEO";

function Attendance75Rule() {
  return (
    <>
      <SEO
        title="75% Attendance Rule Explained | StudentTools"
        description="Learn what the 75% attendance rule is, how to calculate it, exemptions, and how many classes you can miss."
        canonical="/blog/75-attendance-rule"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        <h1 className="mb-4">75% Attendance Rule Explained</h1>

        <p>
          The 75% attendance rule is followed by many schools, colleges and
          universities. Students are generally required to attend at least 75%
          of their total classes to remain eligible for examinations and other
          academic activities.
        </p>

        <h2>What is the 75% Attendance Rule?</h2>

        <p>
          If your institution requires 75% attendance, you must attend at least
          75 out of every 100 classes. Falling below this limit may result in
          exam restrictions unless your institution grants relaxation.
        </p>

        <div className="alert alert-warning">
          <strong>Minimum Required Attendance = 75%</strong>
        </div>

        <h2>Attendance Formula</h2>

        <div className="alert alert-info">
          <strong>
            Attendance % = (Classes Attended ÷ Total Classes) × 100
          </strong>
        </div>

        <h2>Example</h2>

        <p>
          Total Classes = <strong>120</strong>
        </p>

        <p>
          Classes Attended = <strong>90</strong>
        </p>

        <div className="alert alert-success">
          Attendance = (90 ÷ 120) × 100 = <strong>75%</strong>
        </div>

        <h2>How Many Classes Can You Miss?</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Total Classes</th>
              <th>Minimum Classes Required</th>
              <th>Maximum Classes You Can Miss</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100</td>
              <td>75</td>
              <td>25</td>
            </tr>
            <tr>
              <td>120</td>
              <td>90</td>
              <td>30</td>
            </tr>
            <tr>
              <td>150</td>
              <td>113</td>
              <td>37</td>
            </tr>
            <tr>
              <td>200</td>
              <td>150</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>

        <h4>Is 75% attendance compulsory?</h4>
        <p>
          Many institutions make 75% attendance compulsory, but the exact rule
          depends on your university or school.
        </p>

        <h4>Can medical leave increase attendance?</h4>
        <p>
          Some institutions may provide relaxation for medical emergencies with
          valid documents.
        </p>

        <h4>Can I sit in exams with less than 75% attendance?</h4>
        <p>
          It depends on your institution's policy. Some colleges allow
          exemptions, while others strictly enforce the rule.
        </p>

        <h2>Conclusion</h2>

        <p>
          Maintaining at least 75% attendance helps avoid exam eligibility
          issues. Use our Attendance Calculator regularly to track your
          attendance and know how many classes you need to attend.
        </p>
      </div>
    </>
  );
}

export default Attendance75Rule;
