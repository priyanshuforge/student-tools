import { useEffect, useState } from "react";

function AgeCalculator() {
  useEffect(() => {
    document.title = "Age Calculator Online | Calculate Exact Age";

    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Free online age calculator. Calculate your exact age in years, months and days quickly and easily.",
      );
    }
  }, []);
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
  );
}

export default AgeCalculator;
