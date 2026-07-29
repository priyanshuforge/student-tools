import { Helmet } from "react-helmet-async";

function SEO({ title, description, canonical }) {
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
    </Helmet>
  );
}

export default SEO;
