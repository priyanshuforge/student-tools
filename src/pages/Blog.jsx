import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import SEO from "../components/SEO";

const Blog = () => {
  return (
    <>
      <SEO
        title="Student Blogs | CGPA, SGPA, Attendance & Career Guides"
        description="Read useful student guides about CGPA, SGPA, percentage, attendance and academic tools."
      />

      <div className="container py-5">
        <h1 className="text-center mb-3">📚 Student Blogs</h1>

        <p className="text-center text-muted mb-5">
          Helpful guides, formulas and tips for students
        </p>

        <div className="row g-4">
          {blogData.map((blog) => (
            <div className="col-md-6 col-lg-4" key={blog.slug}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h2 className="h5 card-title">{blog.title}</h2>

                  <p className="card-text text-muted">{blog.description}</p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="btn btn-primary mt-auto"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
