import { useState } from "react";
import { evaluate } from "mathjs";
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
        {operators.map((operator, idOperator) => (
          <button
            type="button"
            onClick={() => setInputValue(inputValue.concat(operator))}
            key={idOperator.id}
          >
            {operator}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setInputValue(evaluate(inputValue))}
        >
          {equal}
        </button>
      </div>
    </section>
  );
}
export default Calculator;
