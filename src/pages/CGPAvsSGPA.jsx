import SEO from "../components/SEO";

function CGPAvsSGPA() {
  return (
    <>
      <SEO
        title="CGPA vs SGPA: What's the Difference? | StudentTools"
        description="Understand the difference between CGPA and SGPA with simple examples."
        canonical="/blog/cgpa-vs-sgpa"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        <h1>CGPA vs SGPA</h1>

        <p>
          CGPA and SGPA are both grading systems used by colleges and
          universities, but they are not the same.
        </p>

        <h2>What is SGPA?</h2>

        <p>
          SGPA (Semester Grade Point Average) is the average grade points of one
          semester.
        </p>

        <h2>What is CGPA?</h2>

        <p>
          CGPA (Cumulative Grade Point Average) is the average of all semester
          SGPAs.
        </p>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>SGPA</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One Semester</td>
              <td>All Semesters</td>
            </tr>
            <tr>
              <td>Changes every semester</td>
              <td>Overall Performance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CGPAvsSGPA;
