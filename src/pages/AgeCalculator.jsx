import { useState } from "react";
import SEO from "../components/SEO";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) {
      alert("Please select your date of birth.");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      alert("Date of birth cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <>
      <SEO
        title="Age Calculator | Student Tools"
        description="Calculate your exact age in years, months and days instantly with our free Age Calculator."
        canonical="/age-calculator"
      />

      <div className="container py-5">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
          <div className="card-body p-4">
            <h1 className="text-center mb-3">🎂 Age Calculator</h1>

            <p className="text-muted text-center mb-4">
              Enter your date of birth to calculate your exact age.
            </p>

            <label className="form-label">Date of Birth</label>

            <input
              type="date"
              className="form-control mb-3"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <button className="btn btn-primary w-100" onClick={calculateAge}>
              Calculate Age
            </button>

            {age && (
              <div className="alert alert-success text-center mt-4">
                <h4>Your Age</h4>
                <strong>
                  {age.years} Years, {age.months} Months, {age.days} Days
                </strong>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2>Age Calculator</h2>

        <p>
          This free Age Calculator helps you calculate your exact age in years,
          months, and days from your date of birth. It provides accurate age
          calculations instantly.
        </p>

        <h2>How is Age Calculated?</h2>

        <p>
          Age is calculated by comparing your date of birth with today's date.
          The calculator determines the exact difference in years, months, and
          days.
        </p>

        <h2>Example</h2>

        <ul>
          <li>Date of Birth: 15 August 2005</li>
          <li>Current Date: 31 July 2026</li>
        </ul>

        <p>Your age would be approximately:</p>

        <div className="alert alert-info">20 Years, 11 Months, 16 Days</div>

        <h2>Why use this Age Calculator?</h2>

        <ul>
          <li>Instant and accurate results</li>
          <li>Calculates years, months, and days</li>
          <li>Free to use</li>
          <li>Works on mobile and desktop</li>
          <li>No registration required</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h4>How do I calculate my age?</h4>

        <p>
          Enter your date of birth and the calculator will automatically
          calculate your exact age.
        </p>

        <h4>Is this calculator accurate?</h4>

        <p>
          Yes. It calculates age based on calendar dates, including leap years.
        </p>

        <h4>Can I calculate age for any date?</h4>

        <p>
          Yes. You can calculate age as of today or for a specific date if your
          calculator supports it.
        </p>
      </div>
    </>
  );
}

export default AgeCalculator;
