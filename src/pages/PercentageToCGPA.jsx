import SEO from "../components/SEO";

function PercentageToCGPA() {
  return (
    <>
      <SEO
        title="Percentage to CGPA Conversion | StudentTools"
        description="Learn how to convert percentage into CGPA using simple formulas with examples and conversion table."
        canonical="/blog/percentage-to-cgpa"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        <h1 className="mb-4">Percentage to CGPA Converter & Formula</h1>

        <p>
          Percentage to CGPA conversion is commonly required when applying for
          universities or jobs. Many institutions use a simple conversion
          formula, while some have their own official methods.
        </p>

        <h2>Percentage to CGPA Formula</h2>

        <div className="alert alert-info">
          <strong>CGPA = Percentage ÷ 9.5</strong>
        </div>

        <p>
          This formula is widely used for CBSE and many educational
          institutions. Always verify your university's official conversion
          policy.
        </p>

        <h2>Example</h2>

        <p>
          If your percentage is <strong>76%</strong>
        </p>

        <div className="alert alert-success">
          CGPA = 76 ÷ 9.5 = <strong>8.0</strong>
        </div>

        <h2>Percentage to CGPA Table</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Percentage</th>
              <th>CGPA</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>57%</td>
              <td>6.0</td>
            </tr>
            <tr>
              <td>61.75%</td>
              <td>6.5</td>
            </tr>
            <tr>
              <td>66.5%</td>
              <td>7.0</td>
            </tr>
            <tr>
              <td>71.25%</td>
              <td>7.5</td>
            </tr>
            <tr>
              <td>76%</td>
              <td>8.0</td>
            </tr>
            <tr>
              <td>80.75%</td>
              <td>8.5</td>
            </tr>
            <tr>
              <td>85.5%</td>
              <td>9.0</td>
            </tr>
            <tr>
              <td>90.25%</td>
              <td>9.5</td>
            </tr>
            <tr>
              <td>95%</td>
              <td>10.0</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>

        <h4>How do I convert percentage into CGPA?</h4>
        <p>
          Divide your percentage by 9.5 if your institution follows the CBSE
          conversion method.
        </p>

        <h4>Is the formula the same for every university?</h4>
        <p>No. Different universities may use different conversion formulas.</p>

        <h4>What is 80% in CGPA?</h4>
        <p>Using the CBSE formula, 80% is approximately 8.42 CGPA.</p>

        <h2>Conclusion</h2>

        <p>
          Percentage to CGPA conversion becomes easy once you know the correct
          formula. Always verify your university's official conversion rule if
          it differs from the standard formula.
        </p>
      </div>
    </>
  );
}

export default PercentageToCGPA;
