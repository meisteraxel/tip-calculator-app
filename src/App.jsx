import React, { useState } from "react";
import "./index.css";
import Input from "./components/Input.jsx";
import Calculation from "./components/Calculation.jsx";

function App() {
  return (
    <main>
      <Input />
      <Calculation />
    </main>
  );
}

export default App;
