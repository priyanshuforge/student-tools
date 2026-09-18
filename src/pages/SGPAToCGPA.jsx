import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const SGPAToCGPA = () => {
  return (
    <>
      <SEO
        title="SGPA to CGPA Calculator: Formula, Conversion & Examples"
        description="Learn how to convert SGPA to CGPA using the correct formula, semester-wise examples, and an easy step-by-step guide."
        canonical="/blog/sgpa-to-cgpa"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SGPA to CGPA: Formula, Conversion and Examples",
            description:
              "Complete guide to convert SGPA into CGPA with formula and examples.",
            author: {
              "@type": "Organization",
              name: "StudentTools",
            },
            publisher: {
              "@type": "Organization",
              name: "StudentTools",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://student-tools-lskk.onrender.com/blog/sgpa-to-cgpa",
            },
          }),
        }}
      />

      <div className="container py-5">
        <article className="mx-auto" style={{ maxWidth: "850px" }}>
          <h1 className="fw-bold mb-3">
            SGPA to CGPA: Formula, Conversion & Examples
          </h1>

          <p className="text-muted mb-4">
            Learn how to convert SGPA to CGPA using a simple formula with
            semester-wise examples.
          </p>

          <p>
            SGPA and CGPA are two important academic performance indicators used
            by colleges and universities. SGPA represents your performance in
            one semester, while CGPA represents your overall performance across
            multiple semesters.
          </p>

          <h2 className="mt-4">What is SGPA?</h2>
          <p>
            SGPA stands for <strong>Semester Grade Point Average</strong>. It
            shows the academic performance of a student in a particular
            semester.
          </p>

          <h2 className="mt-4">What is CGPA?</h2>
          <p>
            CGPA stands for <strong>Cumulative Grade Point Average</strong>. It
            represents the average academic performance across all completed
            semesters.
          </p>

          <h2 className="mt-4">SGPA to CGPA Formula</h2>

          <div className="alert alert-primary">
            <strong>Formula:</strong>
            <br />
            CGPA = Sum of (SGPA × Semester Credits) ÷ Total Credits
          </div>

          <p>
            If all semesters have equal credits, you can simply calculate the
            average of all semester SGPAs.
          </p>

          <h2 className="mt-4">Example 1: Equal Credit Semesters</h2>

          <p>Suppose your semester-wise SGPA is:</p>

          <ul>
            <li>Semester 1: 8.0</li>
            <li>Semester 2: 8.5</li>
            <li>Semester 3: 9.0</li>
            <li>Semester 4: 8.5</li>
          </ul>

          <p>
            <strong>CGPA = (8.0 + 8.5 + 9.0 + 8.5) ÷ 4</strong>
          </p>

          <p>
            <strong>CGPA = 34 ÷ 4 = 8.50</strong>
          </p>

          <div className="alert alert-success">
            Therefore, your CGPA is <strong>8.50</strong>.
          </div>

          <h2 className="mt-4">Example 2: Different Semester Credits</h2>

          <p>Suppose the details are:</p>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Semester</th>
                  <th>SGPA</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Semester 1</td>
                  <td>8.0</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Semester 2</td>
                  <td>8.5</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Semester 3</td>
                  <td>9.0</td>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>CGPA = [(8 × 20) + (8.5 × 22) + (9 × 18)] ÷ (20 + 22 + 18)</p>

          <p>CGPA = [160 + 187 + 162] ÷ 60</p>

          <p>
            <strong>CGPA = 509 ÷ 60 = 8.48</strong>
          </p>

          <h2 className="mt-4">Can SGPA Be Directly Converted to CGPA?</h2>

          <p>
            Yes, but the exact method depends on your university's grading
            system. For equal-credit semesters, taking the average of SGPAs is
            generally sufficient. For different credits, a weighted average
            should be used.
          </p>

          <h2 className="mt-4">Difference Between SGPA and CGPA</h2>

          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>SGPA</th>
                  <th>CGPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calculated for one semester</td>
                  <td>Calculated for multiple semesters</td>
                </tr>
                <tr>
                  <td>Shows semester performance</td>
                  <td>Shows overall academic performance</td>
                </tr>
                <tr>
                  <td>Changes every semester</td>
                  <td>Changes cumulatively</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-4">Frequently Asked Questions</h2>

          <h3 className="mt-3">
            1. What is the formula to convert SGPA to CGPA?
          </h3>
          <p>
            CGPA is calculated by dividing the sum of SGPA multiplied by
            semester credits by the total semester credits.
          </p>

          <h3 className="mt-3">2. Is SGPA and CGPA the same?</h3>
          <p>
            No. SGPA is for one semester, whereas CGPA represents performance
            across multiple semesters.
          </p>

          <h3 className="mt-3">3. Can I calculate CGPA by averaging SGPAs?</h3>
          <p>
            Yes, if all semesters have equal credits. Otherwise, use the
            weighted average formula.
          </p>

          <h3 className="mt-3">
            4. Where can I calculate SGPA and CGPA online?
          </h3>
          <p>
            You can use the StudentTools calculators for quick academic
            calculations.
          </p>

          <div className="mt-4">
            <Link to="/sgpa-calculator" className="btn btn-primary me-2">
              SGPA Calculator
            </Link>

            <Link to="/cgpa-calculator" className="btn btn-outline-primary">
              CGPA Calculator
            </Link>
          </div>

          <hr className="my-5" />

          <p className="text-muted">
            Related Article:{" "}
            <Link to="/blog/how-to-calculate-cgpa">How to Calculate CGPA?</Link>
          </p>
        </article>
      </div>
    </>
  );
};

export default SGPAToCGPA;
