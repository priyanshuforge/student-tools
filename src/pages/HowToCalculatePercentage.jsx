import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function HowToCalculatePercentage() {
  return (
    <>
      <SEO
        title="How to Calculate Percentage? Formula, Examples & Easy Guide"
        description="Learn how to calculate percentage with simple formulas, solved examples, percentage increase, decrease and exam percentage calculation."
        canonical="/blog/how-to-calculate-percentage"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        {/* Yahan se article content aayega */}
        <h1 className="mb-4">How to Calculate Percentage?</h1>

        <p>
          Percentage is one of the most commonly used mathematical concepts in
          schools, colleges, competitive exams, and everyday life. It represents
          a value out of 100 and makes comparison easier.
        </p>

        <h2>Percentage Formula</h2>

        <div className="alert alert-info">
          <strong>Percentage = (Obtained Marks ÷ Total Marks) × 100</strong>
        </div>

        <p>
          This formula is used to calculate exam percentage, test scores, and
          academic results.
        </p>

        <h2>Example</h2>

        <p>Suppose a student scores 450 marks out of 500.</p>

        <div className="alert alert-success">
          Percentage = (450 ÷ 500) × 100 = <strong>90%</strong>
        </div>

        <h2>Percentage Calculation Table</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Obtained Marks</th>
              <th>Total Marks</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>450</td>
              <td>500</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>400</td>
              <td>500</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>375</td>
              <td>500</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>350</td>
              <td>500</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>300</td>
              <td>500</td>
              <td>60%</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>

        <h4>How do I calculate percentage?</h4>
        <p>Use the formula (Obtained Marks ÷ Total Marks) × 100.</p>

        <h4>How do you calculate exam percentage?</h4>
        <p>Divide obtained marks by total marks and multiply by 100.</p>

        <h4>What is 450 out of 500 in percentage?</h4>
        <p>450 out of 500 equals 90%.</p>

        <h2>Conclusion</h2>

        <p>
          Calculating percentage is simple using the standard formula. You can
          also use our Percentage Calculator for instant and accurate results.
        </p>
        <h2 className="mt-5">Related Tools & Guides</h2>

        <ul>
          <li>
            <Link to="/percentage-calculator">Percentage Calculator</Link>
          </li>
          <li>
            <Link to="/cgpa-to-percentage">CGPA to Percentage Calculator</Link>
          </li>
          <li>
            <Link to="/blog/how-to-calculate-cgpa">How to Calculate CGPA</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HowToCalculatePercentage;
