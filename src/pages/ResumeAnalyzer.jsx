import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import ReactMarkdown from "react-markdown";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeAnalyzer() {
  useEffect(() => {
    document.title = "AI Resume Analyzer | Resume Score & ATS Checker";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Free AI resume analyzer for students. Check your resume score, skills, ATS match, career roadmap and generate AI interview questions.",
      );
    }
  }, []);
  const [resume, setResume] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState([]);
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  // AI Resume Analysis
  const [aiAnalysis, setAiAnalysis] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  // ATS
  const [jobDescription, setJobDescription] = useState("");
  const [atsScore, setAtsScore] = useState(null);
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

  // Job Recommendations
  const [recommendedJobs, setRecommendedJobs] = useState([]);

  // Career Roadmap
  const [selectedRoadmapRole, setSelectedRoadmapRole] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [selectedRoleMatch, setSelectedRoleMatch] = useState(null);

  // Interview Questions
  const [selectedInterviewRole, setSelectedInterviewRole] = useState("");
  const [interviewQuestions, setInterviewQuestions] = useState([]);

  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Java",
    "Python",
    "C++",
    "SQL",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Bootstrap",
    "Spring Boot",
    "REST API",
    "AWS",
    "Docker",
  ];

  // File Select
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setResume(file || null);
    setResumeText("");
    setSkills([]);
    setScore(null);
    setSuggestions([]);
    setAiAnalysis("");
    setAiError("");
    setAiLoading(false);
    setRecommendedJobs([]);

    setJobDescription("");
    setAtsScore(null);
    setMatchedSkills([]);
    setMissingSkills([]);

    setSelectedRoadmapRole("");
    setRoadmap([]);
    setSelectedRoleMatch(null);

    setSelectedInterviewRole("");
    setInterviewQuestions([]);
  };

  // Regex Helper
  const escapeRegExp = (text) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Exact Skill Detection
  const hasSkill = (text, skill) => {
    const lowerText = text.toLowerCase();
    const lowerSkill = skill.toLowerCase();

    if (lowerSkill === "c++") {
      return lowerText.includes("c++");
    }

    if (lowerSkill === "node.js") {
      return lowerText.includes("node.js") || lowerText.includes("nodejs");
    }

    if (lowerSkill === "next.js") {
      return lowerText.includes("next.js") || lowerText.includes("nextjs");
    }

    if (lowerSkill === "spring boot") {
      return lowerText.includes("spring boot");
    }

    if (lowerSkill === "rest api") {
      return (
        lowerText.includes("rest api") ||
        lowerText.includes("restful api") ||
        lowerText.includes("rest apis")
      );
    }

    const regex = new RegExp(
      `(^|[^a-z0-9])${escapeRegExp(lowerSkill)}([^a-z0-9]|$)`,
      "i",
    );

    return regex.test(lowerText);
  };

  // Detect Skills
  const detectSkills = (text) => {
    return skillList.filter((skill) => hasSkill(text, skill));
  };

  // Resume Score
  const calculateResumeScore = (text, detectedSkills) => {
    const lowerText = text.toLowerCase();

    let totalScore = 0;

    // Skills - 25
    totalScore += Math.min(detectedSkills.length * 3, 25);

    // Education - 15
    if (
      lowerText.includes("education") ||
      lowerText.includes("b.tech") ||
      lowerText.includes("btech") ||
      lowerText.includes("bachelor")
    ) {
      totalScore += 15;
    }

    // Projects - 20
    if (lowerText.includes("project") || lowerText.includes("projects")) {
      totalScore += 20;
    }

    // Experience - 15
    if (
      lowerText.includes("experience") ||
      lowerText.includes("internship") ||
      lowerText.includes("intern")
    ) {
      totalScore += 15;
    }

    // Email - 5
    if (lowerText.includes("@")) {
      totalScore += 5;
    }

    // Phone - 5
    const cleanText = text.replace(/\s/g, "");

    if (/\d{10}/.test(cleanText)) {
      totalScore += 5;
    }

    // LinkedIn - 5
    if (lowerText.includes("linkedin")) {
      totalScore += 5;
    }

    // GitHub - 5
    if (lowerText.includes("github")) {
      totalScore += 5;
    }

    // Resume Length - 5
    if (text.length > 500) {
      totalScore += 5;
    }

    return Math.min(totalScore, 100);
  };

  // Resume Suggestions
  const generateSuggestions = (text, detectedSkills) => {
    const lowerText = text.toLowerCase();
    const result = [];

    if (detectedSkills.length < 5) {
      result.push("Add more relevant technical skills to improve your resume.");
    }

    if (!lowerText.includes("project")) {
      result.push("Add a Projects section with 2-3 strong projects.");
    }

    if (
      !lowerText.includes("internship") &&
      !lowerText.includes("experience")
    ) {
      result.push("Add internship, freelance or practical experience.");
    }

    if (!lowerText.includes("linkedin")) {
      result.push("Add your LinkedIn profile link.");
    }

    if (!lowerText.includes("github")) {
      result.push("Add your GitHub profile link.");
    }

    if (!lowerText.includes("@")) {
      result.push("Add a professional email address.");
    }

    if (text.length < 500) {
      result.push(
        "Add more details about projects, education and achievements.",
      );
    }

    if (result.length === 0) {
      result.push(
        "✅ Your resume contains all major sections. Focus on measurable achievements and strong action words.",
      );
    }

    return result;
  };

  // Job Recommendations
  const generateJobRecommendations = (detectedSkills) => {
    const jobRoles = [
      {
        role: "Frontend Developer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git"],
      },
      {
        role: "React Developer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"],
      },
      {
        role: "Java Developer",
        skills: ["Java", "Spring Boot", "MySQL", "Git", "REST API", "SQL"],
      },
      {
        role: "Full Stack Developer",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "SQL",
          "MongoDB",
        ],
      },
      {
        role: "Backend Developer",
        skills: ["Node.js", "Express", "Java", "Spring Boot", "SQL", "MongoDB"],
      },
      {
        role: "Python Developer",
        skills: ["Python", "SQL", "Git", "GitHub", "REST API"],
      },
    ];

    const normalizedSkills = detectedSkills.map((skill) => skill.toLowerCase());

    const results = jobRoles.map((job) => {
      const matched = job.skills.filter((skill) =>
        normalizedSkills.includes(skill.toLowerCase()),
      );

      const missing = job.skills.filter(
        (skill) => !normalizedSkills.includes(skill.toLowerCase()),
      );

      const matchPercentage = Math.round(
        (matched.length / job.skills.length) * 100,
      );

      return {
        role: job.role,
        matchPercentage,
        matched,
        missing,
      };
    });

    return results.sort((a, b) => b.matchPercentage - a.matchPercentage);
  };

  // Career Roadmap
  // AI Career Roadmap
  const generateRoadmap = async (job) => {
    try {
      setSelectedRoadmapRole(job.role);
      setSelectedRoleMatch(job.matchPercentage);
      setRoadmap([]);

      const response = await fetch(
        "https://student-tools-backend-ufd2.onrender.com/api/generate-roadmap",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resumeText: resumeText,
            role: job.role,
            skills: skills,
            missingSkills: job.missing || [],
            matchPercentage: job.matchPercentage,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Roadmap generation failed");
      }

      setRoadmap([data.roadmap]);

      setTimeout(() => {
        document.getElementById("career-roadmap")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (error) {
      console.error("Roadmap Error:", error);
      alert("AI Career Roadmap generation failed. Please try again.");
    }
  };

  // Interview Question Generator
  // AI Interview Question Generator
  const generateInterviewQuestions = async (role) => {
    console.log("INTERVIEW BUTTON CLICKED:", role);
    try {
      setSelectedInterviewRole(role);
      setInterviewQuestions([]);

      const response = await fetch(
        "https://student-tools-backend-ufd2.onrender.com/api/generate-interview",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resumeText: resumeText,
            role: role,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to generate interview questions");
      }

      setInterviewQuestions(data.questions);

      setTimeout(() => {
        document.getElementById("interview-generator")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (error) {
      console.error("Interview Question Error:", error);
      alert("AI Interview Question generation failed. Please try again.");
    }
  };

  // Analyze PDF
  const handleAnalyze = async () => {
    if (!resume) {
      alert("Please upload your resume first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("resume", resume);

      const uploadResponse = await fetch(
        "https://student-tools-backend-ufd2.onrender.com/api/upload-resume",
        {
          method: "POST",
          body: formData,
        },
      );

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok || !uploadData.success) {
        throw new Error(uploadData.error || "Unable to read PDF");
      }

      const fullText = uploadData.resumeText;

      setResumeText(fullText);

      const detectedSkills = detectSkills(fullText);
      setSkills(detectedSkills);

      const calculatedScore = calculateResumeScore(fullText, detectedSkills);

      setScore(calculatedScore);

      setSuggestions(generateSuggestions(fullText, detectedSkills));
      // AI Resume Analysis
      setAiLoading(true);

      try {
        const aiResponse = await fetch(
          "https://student-tools-backend-ufd2.onrender.com/api/analyze-resume",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              resumeText: fullText,
            }),
          },
        );

        const aiData = await aiResponse.json();

        if (!aiResponse.ok) {
          throw new Error(aiData.error || "AI analysis failed");
        }

        setAiAnalysis(aiData.analysis);
      } catch (aiError) {
        console.error("AI Analysis Error:", aiError);
        setAiAnalysis("AI analysis could not be generated.");
      } finally {
        setAiLoading(false);
      }
      setRecommendedJobs(generateJobRecommendations(detectedSkills));

      // Reset previous results
      setAtsScore(null);
      setMatchedSkills([]);
      setMissingSkills([]);

      setSelectedRoadmapRole("");
      setRoadmap([]);
      setSelectedRoleMatch(null);

      setSelectedInterviewRole("");
      setInterviewQuestions([]);
    } catch (error) {
      console.error("PDF Error:", error);

      alert("Unable to read this PDF.");
    }
  };

  // ATS Match
  const handleATSMatch = async () => {
    if (!resumeText) {
      alert("Please upload and analyze your resume first!");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter a job description.");
      return;
    }

    try {
      const response = await fetch(
        "https://student-tools-backend-ufd2.onrender.com/api/analyze-ats",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resumeText: resumeText,
            jobDescription: jobDescription,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "ATS analysis failed");
      }

      setAtsScore(data.atsScore);
      setMatchedSkills(data.matchedSkills || []);
      setMissingSkills(data.missingSkills || []);
    } catch (error) {
      console.error("ATS Error:", error);
      alert("AI ATS analysis failed. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "750px" }}>
        <div className="card-body p-5">
          {/* Heading */}

          <div className="text-center">
            <h1 className="fw-bold mb-3">📄 AI Resume Analyzer</h1>

            <p className="text-muted mb-4">
              Analyze your resume, discover skills, check ATS compatibility,
              generate a career roadmap and practise interview questions.
            </p>
          </div>

          {/* Upload */}

          <div className="mb-4">
            <label className="form-label fw-semibold">Upload Resume</label>

            <input
              type="file"
              className="form-control"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>

          {resume && (
            <p className="text-success text-center">Selected: {resume.name}</p>
          )}

          <button className="btn btn-primary w-100" onClick={handleAnalyze}>
            🤖 Analyze Resume
          </button>
          {/* AI Resume Analysis */}

          {aiLoading && (
            <div className="alert alert-info mt-4">
              🤖 AI is analyzing your resume... Please wait.
            </div>
          )}

          {aiAnalysis && (
            <div className="card mt-4 shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold mb-3">🤖 AI Resume Analysis</h4>

                <div>
                  <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}
          {resumeText && (
            <>
              {/* Skills */}

              <div className="mt-4">
                <h4 className="fw-bold">🛠️ Skills Found</h4>

                {skills.length > 0 ? (
                  <div className="mt-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="badge bg-success me-2 mb-2 p-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">
                    No matching technical skills detected.
                  </p>
                )}
              </div>

              {/* Resume Score */}

              {score !== null && (
                <div className="mt-4">
                  <h4 className="fw-bold">📊 Resume Score</h4>

                  <h1 className="text-primary fw-bold text-center mt-3">
                    {score}/100
                  </h1>

                  <div className="progress mt-3" style={{ height: "25px" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: `${score}%`,
                      }}
                    >
                      {score}%
                    </div>
                  </div>

                  <div className="text-center mt-3">
                    {score >= 80 ? (
                      <p className="text-success fw-bold">
                        🎉 Excellent Resume!
                      </p>
                    ) : score >= 60 ? (
                      <p className="text-primary fw-bold">
                        👍 Good Resume, but it can be improved.
                      </p>
                    ) : score >= 40 ? (
                      <p className="text-warning fw-bold">
                        ⚠️ Average Resume. Add more skills and projects.
                      </p>
                    ) : (
                      <p className="text-danger fw-bold">
                        ❌ Resume needs improvement.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Suggestions */}

              <div className="mt-4">
                <h4 className="fw-bold">💡 Resume Improvement Suggestions</h4>

                <div className="alert alert-warning mt-3">
                  <ul className="mb-0">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} className="mb-2">
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Job Recommendations */}

              <hr className="my-5" />

              <div>
                <h3 className="fw-bold">💼 Recommended Job Roles</h3>

                <p className="text-muted">
                  Job recommendations based on skills detected in your resume.
                </p>

                {recommendedJobs.slice(0, 4).map((job) => (
                  <div className="card mb-3" key={job.role}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center gap-3">
                        <h5 className="fw-bold mb-0">{job.role}</h5>

                        <span
                          className={`badge ${
                            job.matchPercentage >= 70
                              ? "bg-success"
                              : job.matchPercentage >= 40
                                ? "bg-warning text-dark"
                                : "bg-danger"
                          }`}
                        >
                          {job.matchPercentage}% Match
                        </span>
                      </div>

                      <div className="progress mt-3" style={{ height: "20px" }}>
                        <div
                          className="progress-bar"
                          style={{
                            width: `${job.matchPercentage}%`,
                          }}
                        >
                          {job.matchPercentage}%
                        </div>
                      </div>

                      {job.matched.length > 0 && (
                        <div className="mt-3">
                          <strong className="text-success">
                            ✅ Matching Skills:
                          </strong>

                          <div className="mt-2">
                            {job.matched.map((skill) => (
                              <span
                                key={skill}
                                className="badge bg-success me-2 mb-2"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {job.missing.length > 0 && (
                        <div className="mt-2">
                          <strong className="text-danger">
                            📚 Skills to Learn:
                          </strong>

                          <div className="mt-2">
                            {job.missing.map((skill) => (
                              <span
                                key={skill}
                                className="badge bg-danger me-2 mb-2"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="row g-2 mt-2">
                        <div className="col-md-6">
                          <button
                            className="btn btn-outline-primary w-100"
                            onClick={() => generateRoadmap(job)}
                          >
                            🗺️ Career Roadmap
                          </button>
                        </div>

                        <div className="col-md-6">
                          <button
                            className="btn btn-outline-dark w-100"
                            onClick={() => generateInterviewQuestions(job.role)}
                          >
                            🎤 Interview Questions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Career Roadmap */}

              {roadmap.length > 0 && (
                <div id="career-roadmap" className="mt-5">
                  <hr className="mb-5" />

                  <h3 className="fw-bold">🗺️ Personalized Career Roadmap</h3>

                  <div className="alert alert-primary mt-3">
                    <h5 className="fw-bold">
                      🎯 Target Role: {selectedRoadmapRole}
                    </h5>

                    <p className="mb-0">
                      Current Skill Match: <strong>{selectedRoleMatch}%</strong>
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <ReactMarkdown>{String(roadmap || "")}</ReactMarkdown>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-success text-center mt-4">
                    <h4 className="fw-bold">🚀 Goal: Job Ready</h4>

                    <p className="mb-0">
                      Complete these steps and build real-world projects for
                      your target role.
                    </p>
                  </div>
                </div>
              )}

              {/* Interview Generator */}

              <div id="interview-generator" className="mt-5">
                <hr className="mb-5" />

                <h3 className="fw-bold">🎤 Interview Question Generator</h3>

                <p className="text-muted">
                  Choose a job role and practise Easy, Medium and Hard interview
                  questions.
                </p>

                <div className="d-flex gap-2 flex-wrap mb-4">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => generateInterviewQuestions("Java Developer")}
                  >
                    Java Developer
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      generateInterviewQuestions("React Developer")
                    }
                  >
                    React Developer
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      generateInterviewQuestions("Frontend Developer")
                    }
                  >
                    Frontend
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      generateInterviewQuestions("Full Stack Developer")
                    }
                  >
                    Full Stack
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      generateInterviewQuestions("Backend Developer")
                    }
                  >
                    Backend
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      generateInterviewQuestions("Python Developer")
                    }
                  >
                    Python
                  </button>
                </div>

                {selectedInterviewRole && (
                  <div>
                    <h4 className="fw-bold">
                      🎯 {selectedInterviewRole} Interview Questions
                    </h4>

                    {interviewQuestions.map((item, index) => (
                      <div className="card mt-3" key={index}>
                        <div className="card-body">
                          <span
                            className={`badge ${
                              item.level === "Easy"
                                ? "bg-success"
                                : item.level === "Medium"
                                  ? "bg-warning text-dark"
                                  : "bg-danger"
                            }`}
                          >
                            {item.level}
                          </span>

                          <h5 className="mt-3">
                            {index + 1}. {item.question}
                          </h5>

                          <details className="mt-3">
                            <summary
                              className="btn btn-sm btn-outline-dark"
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              👁️ Show Answer
                            </summary>

                            <div className="alert alert-light border mt-3 mb-0">
                              <strong>Answer:</strong> {item.answer}
                            </div>
                          </details>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ATS Matcher */}

              <hr className="my-5" />

              <div>
                <h3 className="fw-bold">🎯 ATS Job Description Matcher</h3>

                <p className="text-muted">
                  Paste a job or internship description to check how well your
                  resume matches it.
                </p>

                <label className="form-label fw-semibold">
                  Job Description
                </label>

                <textarea
                  className="form-control"
                  rows="6"
                  value={jobDescription}
                  onChange={(e) => {
                    setJobDescription(e.target.value);
                    setAtsScore(null);
                    setMatchedSkills([]);
                    setMissingSkills([]);
                  }}
                  placeholder="Example: We are looking for a React Developer with knowledge of JavaScript, HTML, CSS, Node.js, Git and MongoDB..."
                />

                <button
                  className="btn btn-dark w-100 mt-3"
                  onClick={handleATSMatch}
                >
                  🎯 Check ATS Match
                </button>

                {atsScore !== null && (
                  <div className="mt-4">
                    <h3 className="fw-bold text-center">🎯 ATS Match Score</h3>

                    <h1 className="text-primary fw-bold text-center mt-3">
                      {atsScore}%
                    </h1>

                    <div className="progress mt-3" style={{ height: "25px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: `${atsScore}%`,
                        }}
                      >
                        {atsScore}%
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      {atsScore >= 80 ? (
                        <p className="text-success fw-bold">
                          🎉 Excellent Match!
                        </p>
                      ) : atsScore >= 60 ? (
                        <p className="text-primary fw-bold">
                          👍 Good Match. Add the missing relevant skills.
                        </p>
                      ) : atsScore >= 40 ? (
                        <p className="text-warning fw-bold">
                          ⚠️ Moderate Match. Improve the missing skills.
                        </p>
                      ) : (
                        <p className="text-danger fw-bold">
                          ❌ Low Match. Your resume needs more relevant skills.
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <h5 className="fw-bold">✅ Matched Skills</h5>

                      {matchedSkills.length > 0 ? (
                        matchedSkills.map((skill) => (
                          <span
                            key={skill}
                            className="badge bg-success me-2 mb-2 p-2"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-muted">No matching skills found.</p>
                      )}
                    </div>

                    <div className="mt-3">
                      <h5 className="fw-bold">❌ Missing Skills</h5>

                      {missingSkills.length > 0 ? (
                        missingSkills.map((skill) => (
                          <span
                            key={skill}
                            className="badge bg-danger me-2 mb-2 p-2"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-success fw-bold">
                          🎉 No important skills are missing!
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;
