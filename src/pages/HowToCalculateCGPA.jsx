import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function HowToCalculateCGPA() {
  return (
    <>
      <SEO
        title="How to Calculate CGPA? Formula, Examples & Easy Guide"
        description="Learn how to calculate CGPA step by step with formula, examples, percentage conversion, and FAQs."
        canonical="/blog/how-to-calculate-cgpa"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        <h1 className="mb-4">How to Calculate CGPA?</h1>

        <p>
          CGPA (Cumulative Grade Point Average) is a grading system used by
          schools, colleges, and universities to measure a student's overall
          academic performance. Instead of showing marks in every subject, CGPA
          represents your average performance on a grade point scale.
        </p>

        <h2>CGPA Formula</h2>

        <div className="alert alert-info">
          <strong>CGPA = Total Grade Points ÷ Total Subjects</strong>
        </div>

        <h2>Example</h2>

        <p>Suppose your grade points are:</p>

        <ul>
          <li>Math – 9</li>
          <li>Physics – 8</li>
          <li>Chemistry – 9</li>
          <li>English – 10</li>
          <li>Computer – 9</li>
        </ul>

        <p>
          Total Grade Points = 45
          <br />
          Number of Subjects = 5
        </p>

        <div className="alert alert-success">
          CGPA = 45 ÷ 5 = <strong>9.0</strong>
        </div>

        <h2>How to Convert CGPA into Percentage?</h2>

        <p>
          Different universities use different conversion formulas. A common
          formula is:
        </p>

        <div className="alert alert-warning">Percentage = CGPA × 9.5</div>

        <p>
          Example:
          <br />
          If your CGPA is <strong>8.4</strong>,
          <br />
          Percentage = 8.4 × 9.5 = <strong>79.8%</strong>
        </p>

        <h2>Tips to Improve CGPA</h2>

        <ul>
          <li>Study consistently.</li>
          <li>Complete assignments on time.</li>
          <li>Focus on weak subjects.</li>
          <li>Practice previous year papers.</li>
          <li>Revise regularly.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h4>Is CGPA and SGPA the same?</h4>
        <p>
          No. SGPA is for one semester, while CGPA is calculated across all
          semesters.
        </p>

        <h4>Can CGPA be converted into percentage?</h4>
        <p>Yes, but the conversion formula depends on your university.</p>

        <h4>What is a good CGPA?</h4>
        <p>
          A CGPA above 8 is generally considered very good in most colleges.
        </p>

        <hr />

        <p>Want to calculate instantly?</p>

        <Link className="btn btn-primary" to="/cgpa-calculator">
          Open CGPA Calculator
        </Link>
      </div>
    </>
  );
}

export default HowToCalculateCGPA;
