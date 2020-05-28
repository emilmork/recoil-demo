import React, { useReducer } from "react";
import CounterButton from "./components/counter-button";
import CounterDisplay from "./components/counter-display";

function CounterDemo() {
  return (
    <div className="CounterDemo">
      <CounterButton />
      <CounterDisplay />
    </div>
  );
}

export default CounterDemo;
