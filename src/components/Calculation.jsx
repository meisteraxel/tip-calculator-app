import React from "react";
import "../index.css";

function Calculation() {
  return (
    <div className="bg-very-dark-cyan p-4 rounded-md">
      <div>
        <p className="text-white">Tip Amount</p>
        <p className="text-grayish-cyan">/ person</p>
      </div>
      <p className="text-strong-cyan">$4.27</p>
      <div>
        <p className="text-white">Total</p>
        <p className="text-grayish-cyan">/ person</p>
      </div>
      <p className="text-strong-cyan">$32.79</p>
      <button className="bg-strong-cyan rounded-md">RESET</button>
    </div>
  );
}

export default Calculation;
