import SEO from "../components/SEO";
function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Student Tools"
        description="Read the Privacy Policy of Student Tools."
        canonical="/privacy-policy"
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <h1 className="fw-bold mb-4">Privacy Policy</h1>

                <p>
                  At StudentTools, we respect your privacy and are committed to
                  keeping your information safe.
                </p>

                <h3 className="mt-4">Information We Collect</h3>
                <p>
                  StudentTools currently does not require users to create an
                  account or provide personal information to use our
                  calculators.
                </p>

                <h3 className="mt-4">Calculator Data</h3>
                <p>
                  Values entered into our CGPA and Attendance calculators are
                  used only to perform calculations and are not permanently
                  stored by StudentTools.
                </p>

                <h3 className="mt-4">Cookies and Analytics</h3>
                <p>
                  We may use basic analytics or cookies in the future to
                  understand website usage and improve our services.
                </p>

                <h3 className="mt-4">Third-Party Services</h3>
                <p>
                  StudentTools may use third-party services in the future. Their
                  use of information will be governed by their respective
                  privacy policies.
                </p>

                <h3 className="mt-4">Changes to This Policy</h3>
                <p>
                  This Privacy Policy may be updated as StudentTools develops
                  and new features are introduced.
                </p>

                <p className="text-muted mt-4">Last updated: July 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
