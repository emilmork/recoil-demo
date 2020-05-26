import React, { useReducer } from "react";
import CounterButton from "./components/counter-button";
import CounterDisplay from "./components/counter-display";
import { CounterContext } from "./context";
import reducer, { initialState } from "./reducer";

function CounterDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div className="CounterDemo">
        <CounterButton />
        <CounterDisplay />
      </div>
    </CounterContext.Provider>
  );
}

export default CounterDemo;
