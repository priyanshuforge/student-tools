import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";
function Blog() {
  const blogs = blogData.map((blog) => ({
    ...blog,
    link: `/blog/${blog.slug}`,
  }));
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
