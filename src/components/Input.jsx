import React from "react";
import "../index.css";

function Input() {
  return (
    <div className="font-bold w-1/2 flex flex-col justify-between text-2xl">
      <p className="text-dark-grayish-cyan text-base">Bill</p>
      <div className="relative">
        <img
          src="../src/assets/icon-dollar.svg"
          alt=""
          className="absolute top-4 left-5"
        />
        <input
          type="number"
          name=""
          id=""
          className="bg-very-light-grayish-cyan rounded-md text-grayish-cyan text-right w-full py-2 px-5"
          placeholder="0"
        />
      </div>
      <p className="text-dark-grayish-cyan text-base">Select Tip %</p>
      <div className="grid grid-cols-3 text-center gap-4">
        <label
          htmlFor="5"
          className="bg-very-dark-cyan text-white rounded-md cursor-pointer w-28 px-2 py-3"
        >
          5%
        </label>
        <input type="radio" className="hidden" />
        <label
          htmlFor="10"
          className="bg-very-dark-cyan text-white rounded-md cursor-pointer w-28 px-2 py-3"
        >
          10%
        </label>
        <input type="radio" className="hidden" />
        <label
          htmlFor="15"
          className="bg-very-dark-cyan text-white rounded-md cursor-pointer w-28 px-2 py-3"
        >
          15%
        </label>
        <input type="radio" className="hidden" />
        <label
          htmlFor="25%"
          className="bg-very-dark-cyan text-white rounded-md cursor-pointer w-28 px-2 py-3"
        >
          25%
        </label>
        <input type="radio" className="hidden" />
        <label
          htmlFor="50%"
          className="bg-very-dark-cyan text-white rounded-md cursor-pointer w-28 px-2 py-3"
        >
          50%
        </label>
        <input type="radio" className="hidden" />
        <input
          type="number"
          placeholder="Custom"
          className="cursor-pointer rounded-md placeholder:text-dark-grayish-cyan bg-very-light-grayish-cyan text-center w-28 px-2 py-3"
        />
      </div>
      <p className="text-dark-grayish-cyan text-base">Number of People</p>
      <div className="relative">
        <img
          src="../src/assets/icon-person.svg"
          alt=""
          className="absolute top-4 left-5"
        />
        <input
          type="number"
          name=""
          id=""
          className="bg-very-light-grayish-cyan rounded-md text-grayish-cyan text-right w-full py-2 px-5"
          placeholder="0"
        />
      </div>
    </div>
  );
}

export default Input;
