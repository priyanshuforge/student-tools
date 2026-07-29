import SEO from "../components/SEO";
function About() {
  return (
    <>
      <SEO
        title="About Student Tools"
        description="Learn about Student Tools and our free online calculators for students."
        canonical="/about"
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h1 className="fw-bold mb-4">About StudentTools</h1>

                <p>
                  StudentTools is a free online platform designed to make
                  everyday academic calculations simple and quick for students.
                </p>

                <p>
                  Our goal is to provide easy-to-use student utilities without
                  complicated steps, registrations, or unnecessary distractions.
                </p>

                <h2 className="h4 fw-bold mt-4">What We Offer</h2>

                <p>
                  StudentTools currently provides a CGPA to Percentage
                  Calculator and an Attendance Calculator. More useful academic
                  tools will be added over time.
                </p>

                <h2 className="h4 fw-bold mt-4">Important Note</h2>

                <p>
                  Calculation methods and academic rules can vary between
                  universities and institutions. Results provided by
                  StudentTools are for informational purposes. Students should
                  verify official requirements with their institution.
                </p>

                <h2 className="h4 fw-bold mt-4">Our Mission</h2>

                <p className="mb-0">
                  Our mission is simple: build useful, fast and accessible tools
                  that help students save time and focus more on learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
