import SEO from "../components/SEO";

const TermsAndConditions = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions | Student Tools"
        description="Read the terms and conditions for using Student Tools website."
        canonical="/terms-and-conditions"
      />

      <div className="container py-5">
        <h1 className="mb-4">Terms & Conditions</h1>

        <p>
          Welcome to Student Tools. By accessing and using this website, you
          agree to comply with these Terms and Conditions.
        </p>

        <h2 className="mt-4">Use of Website</h2>
        <p>
          Student Tools provides educational calculators and student-related
          resources for informational and educational purposes only.
        </p>

        <h2 className="mt-4">Accuracy of Information</h2>
        <p>
          We try to provide accurate information, but we do not guarantee that
          all calculations, content, or results will always be completely
          error-free.
        </p>

        <h2 className="mt-4">User Responsibility</h2>
        <p>
          Users are responsible for verifying important academic, financial, or
          career-related information before making decisions.
        </p>

        <h2 className="mt-4">Intellectual Property</h2>
        <p>
          The content, design, branding, and materials on this website may not
          be copied or reproduced without permission.
        </p>

        <h2 className="mt-4">Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time
          without prior notice.
        </p>

        <h2 className="mt-4">Contact Us</h2>
        <p>
          If you have any questions regarding these terms, please contact us
          through the Contact Us page.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
