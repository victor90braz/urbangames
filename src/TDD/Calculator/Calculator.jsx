import { useState } from "react";
import { equal, operators, rows } from "./CalculatorAssets";

function Calculator() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section>
      <h1>Calculator</h1>

      <input type="text" value={inputValue} readOnly />

      <div role="grid">
        {rows.map((row, idRow) => (
          <div key={idRow.id} role="row">
            {row.map((number) => (
              <button
                type="button"
                onClick={() => setInputValue(inputValue.concat(number))}
                key={number}
              >
                {number}
              </button>
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
