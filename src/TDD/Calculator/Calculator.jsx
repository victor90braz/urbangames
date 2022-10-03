import { equal, numbers, operators, rows } from "./CalculatorAssets";

function Calculator() {
  return (
    <section>
      <h1>Calculator</h1>
      <input type="text" />

      <div role="grid">
        {rows.map((row) => (
          <div key={numbers} role="row">
            {row.map((number) => (
              <span key={number}>{number}</span>
            ))}
          </div>
        ))}
        {operators.map((operator) => (
          <span key={operator}>{operator}</span>
        ))}
        <span>{equal}</span>
      </div>
    </section>
  );
}
export default Calculator;
