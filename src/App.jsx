import React, { useState } from "react";
import "./index.css";
import Input from "./components/Input.jsx";
import Calculation from "./components/Calculation.jsx";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-mono">
      <img src="./src/assets/logo.svg" alt="Logo" />
      <main className="bg-white flex justify-between gap-10 mt-20 p-10 rounded-3xl custom-height custom-width">
        <Input />
        <Calculation />
      </main>
    </div>
  );
}

export default App;
