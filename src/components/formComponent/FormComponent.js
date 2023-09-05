import React, { useState } from "react";
import "./FormComponent.css";
export default function FormComponent(props) {
  const initialSavings = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-returns": 0,
    duration: 0
  };
  const [iniSavings, updSavings] = useState(initialSavings);
  function formSubmitHandler(event) {
    event.preventDefault();
    props.formdata(iniSavings);
  }
  const inputHandler = (key, value) => {
    updSavings((prev) => {
      return {
        ...prev,
        [key]: value
      };
    });
  };
  const resetHandler = () => {
    updSavings(initialSavings);
  };
  return (
    <div>
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) => {
                inputHandler("current-savings", event.target.value);
              }}
              value={iniSavings["current-savings"]}
              type="number"
              id={"current-savings"}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              onChange={(event) => {
                inputHandler("yearly-contribution", event.target.value);
              }}
              value={iniSavings["yearly-contribution"]}
              id={"yearly-contribution"}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-returns">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={(event) => {
                inputHandler("expected-returns", event.target.value);
              }}
              value={iniSavings["expected-returns"]}
              id={"expected-returns"}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              onChange={(event) => {
                inputHandler("duration", event.target.value);
              }}
              value={iniSavings["duration"]}
              id={"duration"}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
