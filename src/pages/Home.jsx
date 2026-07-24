import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">🎓 StudentTools</h1>

        <p className="lead text-muted">
          Free online tools designed to make student life easier.
        </p>
      </div>

      <div className="row justify-content-center g-4">
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
      </div>
    </div>
  );
}

export default Home;
