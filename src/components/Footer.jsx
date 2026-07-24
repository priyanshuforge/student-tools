import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container text-center">
        <p className="mb-2">© 2026 StudentTools. All rights reserved.</p>

        <div>
          <Link to="/about" className="text-light text-decoration-none mx-2">
            About
          </Link>

          <Link
            to="/privacy-policy"
            className="text-light text-decoration-none mx-2"
          >
            Privacy Policy
          </Link>

          <Link to="/contact" className="text-light text-decoration-none mx-2">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
