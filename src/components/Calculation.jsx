import React from "react";
import "../index.css";

function Calculation() {
  return (
    <div className="bg-very-dark-cyan p-8 rounded-2xl w-1/2 flex flex-col">
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-white font-semibold text-m">Tip Amount</p>
          <p className="text-grayish-cyan text-sm font-semibold">/ person</p>
        </div>
        <p className="text-strong-cyan text-5xl font-bold">$0.00</p>
      </div>
      <div className="flex justify-between items-center mt-12">
        <div>
          <p className="text-white font-semibold text-m">Total</p>
          <p className="text-grayish-cyan text-sm font-semibold">/ person</p>
        </div>
        <p className="text-strong-cyan text-5xl font-bold">$0.00</p>
      </div>
      <button className="bg-strong-cyan rounded-md py-3 w-full mt-auto text-xl font-bold text-very-dark-cyan hover:bg-light-grayish-cyan">
        RESET
      </button>
    </div>
  );
}

export default Calculation;
