import SEO from "../components/SEO";

function CGPAvsSGPA() {
  return (
    <>
      <SEO
        title="CGPA vs SGPA: What's the Difference? | StudentTools"
        description="Understand the difference between CGPA and SGPA with simple examples."
        canonical="/blog/cgpa-vs-sgpa"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "CGPA vs SGPA: What's the Difference?",
            description:
              "Understand the difference between CGPA and SGPA with simple examples and comparison.",
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
                "https://student-tools-lskk.onrender.com/blog/cgpa-vs-sgpa",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the difference between CGPA and SGPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SGPA represents academic performance in one semester, while CGPA represents overall performance across multiple semesters.",
                },
              },
              {
                "@type": "Question",
                name: "Is SGPA calculated every semester?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, SGPA is calculated separately for each semester based on the grades and credits earned in that semester.",
                },
              },
              {
                "@type": "Question",
                name: "Which is more important, CGPA or SGPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CGPA shows overall academic performance, while SGPA helps students understand their performance in a particular semester. Both can be important depending on the institution.",
                },
              },
              {
                "@type": "Question",
                name: "Can SGPA be converted into CGPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, CGPA can be calculated from semester SGPAs by using the average or credit-weighted average, depending on the university rules.",
                },
              },
            ],
          }),
        }}
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
