import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Student Tools - Free Online Student Calculators"
        description="Free online student tools including Percentage Calculator, CGPA Calculator, SGPA Calculator, Attendance Calculator, Average Calculator, Age Calculator and AI Resume Analyzer."
        canonical="/"
      />

      {/* Existing Home JSX */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">🎓 StudentTools</h1>

          <p className="lead text-muted">
            Free online tools designed to make student life easier.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {/* CGPA Calculator */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h2>📊 CGPA Calculator</h2>

                <p className="text-muted">
                  Easily calculate your CGPA and convert CGPA into percentage.
                </p>

                <Link to="/cgpa-calculator" className="btn btn-primary">
                  Calculate CGPA
                </Link>
              </div>
            </div>
          </div>

          {/* Attendance Calculator */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h2>📅 Attendance Calculator</h2>

                <p className="text-muted">
                  Calculate your attendance and check how many classes you need.
                </p>

                <Link to="/attendance-calculator" className="btn btn-success">
                  Check Attendance
                </Link>
              </div>
            </div>
          </div>

          {/* SGPA Calculator */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h2>📚 SGPA Calculator</h2>

                <p className="text-muted">
                  Calculate your SGPA using subject credits and grade points.
                </p>

                <Link to="/sgpa-calculator" className="btn btn-warning">
                  Calculate SGPA
                </Link>
              </div>
            </div>
          </div>

          {/* Percentage Calculator */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h2>📈 Percentage Calculator</h2>

                <p className="text-muted">
                  Calculate your percentage from obtained and total marks.
                </p>

                <Link to="/percentage-calculator" className="btn btn-info">
                  Calculate Percentage
                </Link>
              </div>
            </div>
          </div>
          {/* Student Blog */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h2>📝 Student Blog</h2>

                <p className="text-muted">
                  Helpful articles on CGPA, SGPA, exams, careers, study tips and
                  more.
                </p>

                <Link to="/blog" className="btn btn-dark">
                  Read Articles
                </Link>
              </div>
            </div>
          </div>
          {/* Average Calculator */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h2>📝 Marks Average Calculator</h2>

                <p className="text-muted">
                  Calculate the average marks of multiple subjects easily.
                </p>

                <Link to="/average-calculator" className="btn btn-secondary">
                  Calculate Average
                </Link>
              </div>
              {/* Age Calculator */}
              <div className="col-md-5">
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <h2>🎂 Age Calculator</h2>

                    <p className="text-muted">
                      Calculate your exact age in years, months and days.
                    </p>

                    <Link to="/age-calculator" className="btn btn-danger">
                      Calculate Age
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
