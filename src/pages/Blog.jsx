import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import SEO from "../components/SEO";

const Blog = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Student Tools Blog Articles",
    itemListElement: blogData.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: blog.title,
      url: `https://student-tools-lskk.onrender.com/blog/${blog.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://student-tools-lskk.onrender.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://student-tools-lskk.onrender.com/blog",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Student Blogs | CGPA, SGPA, Attendance & Career Guides"
        description="Read useful student guides about CGPA, SGPA, percentage, attendance and academic tools."
      />

      {/* ItemList Schema */}
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <div className="container py-5">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>

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
