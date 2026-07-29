import SEO from "../components/SEO";
function Contact() {
  return (
    <>
      <SEO
        title="Contact Student Tools"
        description="Contact Student Tools for suggestions, feedback and support."
        canonical="/contact"
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <h1 className="fw-bold mb-4">Contact Us</h1>

                <p>
                  Have a question, suggestion, or found an issue with
                  StudentTools? We'd be happy to hear from you.
                </p>

                <h3 className="mt-4">Get in Touch</h3>

                <p>
                  You can contact us for feedback, corrections, feature
                  suggestions, or general questions.
                </p>

                <div className="alert alert-light border mt-4">
                  <strong>Email:</strong> your-email@example.com
                </div>

                <h3 className="mt-4">Feedback</h3>

                <p>
                  Your feedback helps us improve StudentTools and build more
                  useful tools for students.
                </p>

                <h3 className="mt-4">Response Time</h3>

                <p>We will try to respond to queries as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
