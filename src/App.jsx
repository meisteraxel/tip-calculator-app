import React, { useState } from "react";
import "./index.css";
import Input from "./components/Input.jsx";
import Calculation from "./components/Calculation.jsx";

function App() {
  return (
    <>
      <img src="./src/assets/logo.svg" alt="Logo" />
      <main>
        <Input />
        <Calculation />
      </main>
    </>
  );
}

export default App;
