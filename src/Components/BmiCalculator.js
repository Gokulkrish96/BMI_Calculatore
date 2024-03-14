import {useState}from "react";

export const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const BmiCalculate = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setStatus("UnderWeight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("OverWeight");
      } else {
        setStatus("Obese");
      }
      setError("");
    } else {
      setBmi(null);
      setStatus("");
      setError("Please enter valid numeric values for height and weight.");
    }
  };
  const ClearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus("");
    setError("")
  };

  return (
    <div className="bmi-calculator">
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-container">
          <label htmlFor="height">Height(CM):</label>
          <input
            type="text"
            value={height}
            id="height"
            autoFocus="ON"
            autoComplete="OFF"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight(kg):</label>
          <input
            type="text"
            value={weight}
            id="weight"
            autoComplete="OFF"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button onClick={BmiCalculate}>Calculate BMI</button>
        <button onClick={ClearAll}>Clear</button>

        {bmi !== null && (
          <div className="result">
            <p>Your BMI is : {bmi}</p>
            <p>Status: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
};
