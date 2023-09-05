import React from "react";
import logo from "./assets/investment-calculator-logo.png";
import FormComponent from "./components/formComponent/FormComponent";
import TableComponent from "./components/tableComponent/TableComponent";
function App() {
  const yearlyData = [];
  const [userInput, setUserInput] = React.useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-returns"] / 100;
    const duration = +userInput["duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <FormComponent formdata={calculateHandler} />
      {!userInput && <p>No Investment Calculated</p>}
      {userInput && (
        <TableComponent
          tableData={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
