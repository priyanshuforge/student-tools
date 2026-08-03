import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CGPACalculator from "./pages/CGPAcalculator";
import AttendanceCalculator from "./pages/AttendanceCalculator";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SGPACalculator from "./pages/SGPACalculator";
import PercentageCalculator from "./pages/PercentageCalculator";
import AverageCalculator from "./pages/AverageCalculator";
import AgeCalculator from "./pages/AgeCalculator";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Blog from "./pages/Blog";
import HowToCalculateCGPA from "./pages/HowToCalculateCGPA";
import CGPAvsSGPA from "./pages/CGPAvsSGPA";
import CGPAToPercentage from "./pages/CGPAToPercentage";
import Attendance75Rule from "./pages/Attendance75Rule";
import AttendancePercentage from "./pages/AttendancePercentage";
import PercentageToCGPA from "./pages/PercentageToCGPA";
import HowToCalculatePercentage from "./pages/HowToCalculatePercentage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cgpa-calculator" element={<CGPACalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sgpa-calculator" element={<SGPACalculator />} />
        <Route path="/average-calculator" element={<AverageCalculator />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/cgpa-vs-sgpa" element={<CGPAvsSGPA />} />
        <Route path="/blog/cgpa-to-percentage" element={<CGPAToPercentage />} />
        <Route
          path="/blog/how-to-calculate-cgpa"
          element={<HowToCalculateCGPA />}
        />
        <Route path="/blog/75-attendance-rule" element={<Attendance75Rule />} />
        <Route
          path="/blog/how-to-calculate-percentage"
          element={<HowToCalculatePercentage />}
        />
        <Route
          path="/percentage-calculator"
          element={<PercentageCalculator />}
        />
        <Route path="/blog/percentage-to-cgpa" element={<PercentageToCGPA />} />
        <Route
          path="/attendance-calculator"
          element={<AttendanceCalculator />}
        />
        <Route
          path="/blog/attendance-percentage"
          element={<AttendancePercentage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
