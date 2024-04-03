import React from "react";
import "../index.css";

function Input() {
  return (
    <div className="font-semibold w-1/2">
      <p className="text-dark-grayish-cyan">Bill</p>
      <img src="../src/assets/icon-dollar.svg" alt="" />
      <input
        type="number"
        name=""
        id=""
        className="bg-very-light-grayish-cyan rounded-md text-right"
        placeholder="0"
      />
      <p>Select Tip %</p>
      <label htmlFor="5">5%</label>
      <input type="radio" />
      <label htmlFor="10">10%</label>
      <input type="radio" />
      <label htmlFor="15">15%</label>
      <input type="radio" />
      <label htmlFor="25%">25%</label>
      <input type="radio" />
      <label htmlFor="50%">50%</label>
      <input type="radio" />
      <input type="number" placeholder="Custom" />
      <p>Number of People</p>
      <img src="../src/assets/icon-person.svg" alt="" />
      <input type="number" />
    </div>
  );
}

export default Input;
