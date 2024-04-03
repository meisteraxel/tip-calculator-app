import React from "react";
import "../index.css";

function Calculation() {
  return (
    <div className="bg-very-dark-cyan p-4 rounded-md w-1/2 flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white font-semibold text-m">Tip Amount</p>
          <p className="text-grayish-cyan text-sm">/ person</p>
        </div>
        <p className="text-strong-cyan text-4xl font-bold">$4.27</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="text-white font-semibold text-m">Total</p>
          <p className="text-grayish-cyan text-sm">/ person</p>
        </div>
        <p className="text-strong-cyan text-4xl font-bold">$32.27</p>
      </div>
      <button className="bg-strong-cyan rounded-md py-1 w-full mt-auto font-semibold text-very-dark-cyan">
        RESET
      </button>
    </div>
  );
}

export default Calculation;
