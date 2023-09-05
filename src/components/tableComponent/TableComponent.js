import "./TableComponent.css";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
export default function TableComponent(props) {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.savingsEndOfYear)}</td>
              <td>{formatter.format(data.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  data.yearlyInterest -
                    props.initialInvestment -
                    data.yearlyContribution * data.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment - data.yearlyContribution * data.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
