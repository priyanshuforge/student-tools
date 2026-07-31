import SEO from "../components/SEO";

import { Link } from "react-router-dom";
function Blog() {
  const blogs = [
    {
      title: "How to Calculate CGPA?",
      description:
        "Learn how to calculate CGPA with formula, examples and step-by-step guide.",
      link: "/blog/how-to-calculate-cgpa",
    },
    {
      title: "CGPA vs SGPA",
      description:
        "Understand the difference between CGPA and SGPA with simple examples.",
      link: "/blog/cgpa-vs-sgpa",
    },
    {
      title: "How to Convert CGPA to Percentage?",
      description:
        "Easy guide to convert CGPA into Percentage using different university formulas.",
      link: "/blog/cgpa-to-percentage",
    },
    {
      title: "75% Attendance Rule Explained",
      description:
        "Everything students need to know about the 75% attendance rule.",
      link: "/blog/75-attendance-rule",
    },
    {
      title: "How to Calculate Attendance Percentage?",
      description:
        "Calculate attendance percentage easily with formula and examples.",
      link: "/blog/attendance-percentage",
    },
  ];

  return (
    <>
      <SEO
        title="Student Blog | StudentTools"
        description="Helpful guides for CGPA, SGPA, Attendance, Percentage and student career."
        canonical="/blog"
      />

      <div className="container py-5">
        <h1 className="mb-4 text-center">Student Blog</h1>

        {blogs.map((blog, index) => (
          <div className="card shadow-sm mb-4" key={index}>
            <div className="card-body">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>

              <Link to={blog.link} className="btn btn-primary">
                Read Article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
