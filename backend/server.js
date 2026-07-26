const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const multer = require("multer");
const pdfParse = require("pdf-parse");
dotenv.config();

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
// Middleware
app.use(cors());
app.use(express.json({ limit: "2mb" }));

// Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash-lite"
});
// Test Route
app.get("/", (req, res) => {
  res.send("StudentTools AI Backend is running 🚀");
});
// Test Route
app.get("/", (req, res) => {
  res.send("StudentTools AI Backend is running 🚀");
});

// PDF Upload & Text Extraction
app.post("/api/upload-resume", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "Please upload a PDF file.",
      });
    }

    // Only allow PDF
    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({
        success: false,
        error: "Only PDF files are allowed.",
      });
    }

    // Extract text from PDF
    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    if (!resumeText || !resumeText.trim()) {
      return res.status(400).json({
        success: false,
        error: "No readable text found in PDF.",
      });
    }

    console.log("✅ PDF successfully read");

    return res.json({
      success: true,
      resumeText: resumeText,
    });

  } catch (error) {
    console.error("❌ PDF Parse Error:", error);

    return res.status(500).json({
      success: false,
      error: "Unable to read this PDF.",
    });
  }
});


// AI Resume Analyzer
app.post("/api/analyze-resume", async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText || !resumeText.trim()) {
      return res.status(400).json({
        success: false,
        error: "Resume text is required.",
      });
    }

    console.log("🤖 AI Resume Analysis Started...");

    const prompt = `
You are an expert resume reviewer, ATS specialist and career coach.

Analyze the following resume carefully.

Give the response in the following format:

1. OVERALL RESUME FEEDBACK
Give a short overall review.

2. STRONG POINTS
List the strongest parts of the resume.

3. WEAK POINTS
List areas that need improvement.

4. RECOMMENDED SKILLS
Suggest useful skills the candidate should learn.

5. PROJECT IMPROVEMENTS
Suggest improvements to the candidate's projects.

6. ATS IMPROVEMENTS
Explain how to improve the resume for ATS systems.

7. RECOMMENDED JOB ROLES
Suggest suitable job roles based on the resume.

8. INTERVIEW QUESTIONS
Generate 5 interview questions based specifically on the resume.

Resume:
--------------------
${resumeText}
--------------------
`;

const result = await model.generateContent(prompt);
const analysis = result.response.text();

    console.log("✅ AI Analysis Completed");

    return res.status(200).json({
      success: true,
      analysis: analysis,
    });
  } catch (error) {
    console.error("❌ Gemini Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "AI resume analysis failed.",
    });
  }
});
// AI ATS Analyzer
app.post("/api/analyze-ats", async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        success: false,
        error: "Resume text and job description are required.",
      });
    }

    console.log("🤖 AI ATS Analysis Started...");

    const prompt = `
You are an expert ATS (Applicant Tracking System) resume analyzer.

Compare the following resume with the job description.

Return ONLY valid JSON in this exact format:

{
  "atsScore": 85,
  "matchedSkills": ["Java", "React", "Spring Boot"],
  "missingSkills": ["Docker", "AWS"],
  "feedback": "Short explanation about the candidate's match for this job."
}

Rules:
- atsScore must be a number from 0 to 100.
- matchedSkills must contain skills present in both the resume and job description.
- missingSkills must contain important job skills missing from the resume.
- Do not include markdown.
- Do not include code fences.
- Return only JSON.

RESUME:
----------------
${resumeText}
----------------

JOB DESCRIPTION:
----------------
${jobDescription}
----------------
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const atsData = JSON.parse(cleanedText);

    return res.status(200).json({
      success: true,
      ...atsData,
    });
  } catch (error) {
    console.error("❌ ATS Gemini Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "ATS analysis failed.",
    });
  }
});
// AI Career Roadmap Generator
app.post("/api/generate-roadmap", async (req, res) => {
  try {
    const { resumeText, role } = req.body;

    if (!resumeText || !role) {
      return res.status(400).json({
        success: false,
        error: "Resume text and target role are required.",
      });
    }

    console.log("🗺️ AI Career Roadmap Started...");

    const prompt = `
You are an expert career coach and software industry mentor.

Analyze the candidate's resume and create a personalized career roadmap
for the target role: ${role}.

Create the roadmap in the following format:

## 1. CURRENT SKILLS
Identify relevant skills the candidate already has.

## 2. SKILLS TO LEARN
List important missing skills for the target role.

## 3. LEARNING ORDER
Give a step-by-step order in which the candidate should learn the skills.

## 4. PROJECTS TO BUILD
Suggest 3 practical projects from beginner to advanced level.

## 5. INTERVIEW PREPARATION
Explain what technical topics, DSA topics and interview areas to prepare.

## 6. 3-MONTH ACTION PLAN
Create a realistic month-by-month plan:
- Month 1
- Month 2
- Month 3

Keep the roadmap practical and suitable for a student preparing for internships
and entry-level software jobs.

RESUME:
${resumeText}

TARGET ROLE:
${role}
`;

    const result = await model.generateContent(prompt);
    const roadmap = result.response.text();

    console.log("✅ AI Career Roadmap Completed");

    return res.status(200).json({
      success: true,
      roadmap: roadmap,
    });
  } catch (error) {
    console.error("❌ Roadmap Gemini Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Career roadmap generation failed.",
    });
  }
});
// AI Interview Question Generator
app.post("/api/generate-interview", async (req, res) => {
  try {
    const { resumeText, role } = req.body;

    if (!resumeText || !role) {
      return res.status(400).json({
        success: false,
        error: "Resume text and target role are required.",
      });
    }

    console.log("🎤 AI Interview Questions Started...");

    const prompt = `
You are an expert technical interviewer.

Generate 10 personalized interview questions for a candidate applying for:

TARGET ROLE:
${role}

CANDIDATE RESUME:
${resumeText}

Generate questions based on the candidate's actual skills, projects,
technologies, strengths, and missing skills.

Include:
- 3 Easy questions
- 4 Medium questions
- 3 Hard questions

For every question also provide a short interview-ready answer.

Return ONLY valid JSON in this exact format:

[
  {
    "level": "Easy",
    "question": "Question here",
    "answer": "Answer here"
  }
]
`;

    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // Remove possible Markdown ```json wrapper
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    const questions = JSON.parse(text);

    console.log("✅ AI Interview Questions Completed");

    return res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    console.error("❌ Interview Gemini Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Interview question generation failed.",
    });
  }
});
// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 StudentTools AI Backend running on port ${PORT}`);
});