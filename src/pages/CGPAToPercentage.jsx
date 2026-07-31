import SEO from "../components/SEO";

function CGPAToPercentage() {
  return (
    <>
      <SEO
        title="CGPA to Percentage Conversion | StudentTools"
        description="Learn how to convert CGPA into percentage using different university formulas with examples."
        canonical="/blog/cgpa-to-percentage"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        <h1>How to Convert CGPA to Percentage?</h1>

        <p>
          CGPA can be converted into percentage using the formula prescribed by
          your university. Different universities use different conversion
          formulas.
        </p>

        <h2>Common Formula</h2>

        <div className="alert alert-info">
          <strong>Percentage = CGPA × 9.5</strong>
        </div>

        <h2>Example</h2>

        <p>
          If your CGPA is <strong>8.2</strong>
        </p>

        <div className="alert alert-success">
          Percentage = 8.2 × 9.5 = <strong>77.9%</strong>
        </div>

        <p>
          Always check your university's official conversion rule before using
          this formula.
        </p>
      </div>
    </>
  );
}

export default CGPAToPercentage;
