import { Helmet } from "react-helmet-async";

function SEO({ title, description, canonical, image }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="student tools, percentage calculator, cgpa calculator, sgpa calculator, attendance calculator, age calculator, average calculator, resume analyzer"
      />

      <meta name="author" content="Student Tools" />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href={`https://student-tools-lskk.onrender.com${canonical}`}
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://student-tools-lskk.onrender.com${canonical}`}
      />
      <meta
        property="og:image"
        content={image || "https://student-tools-lskk.onrender.com/logo.png"}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image || "https://student-tools-lskk.onrender.com/logo.png"}
      />
    </Helmet>
  );
}

export default SEO;
