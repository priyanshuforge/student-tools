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
        <Route
          path="/percentage-calculator"
          element={<PercentageCalculator />}
        />
        <Route
          path="/attendance-calculator"
          element={<AttendanceCalculator />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
