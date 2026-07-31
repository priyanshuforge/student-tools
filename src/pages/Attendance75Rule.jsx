import SEO from "../components/SEO";

function Attendance75Rule() {
  return (
    <>
      <SEO
        title="75% Attendance Rule Explained | StudentTools"
        description="Learn everything about the 75% attendance rule, calculation, shortage, exemptions and FAQs."
        canonical="/blog/75-attendance-rule"
      />

      <div className="container py-5" style={{ maxWidth: "900px" }}>
        <h1>75% Attendance Rule Explained</h1>

        <p>
          Many colleges and universities require students to maintain at least
          75% attendance to appear in examinations. Falling below this limit may
          result in detention unless special permission is granted.
        </p>

        <h2>What is the 75% Attendance Rule?</h2>

        <p>A student must attend at least 75 out of every 100 classes.</p>

        <div className="alert alert-info">
          <strong>
            Attendance % = (Classes Attended ÷ Total Classes) × 100
          </strong>
        </div>

        <h2>Example</h2>

        <p>If you attended 72 classes out of 90:</p>

        <p>
          Attendance = (72 ÷ 90) × 100 = <strong>80%</strong>
        </p>

        <h2>Can attendance shortage be condoned?</h2>

        <p>
          Some universities allow medical leave or other genuine reasons, but
          rules differ from university to university.
        </p>

        <h2>Calculate Attendance Easily</h2>

        <p>
          Use our Attendance Calculator to know how many classes you need to
          attend or can safely miss.
        </p>
      </div>
    </>
  );
}

export default Attendance75Rule;
