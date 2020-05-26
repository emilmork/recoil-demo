import React, { useContext } from "react";
import { CounterContext } from "../context";

const CounterDisplay: React.FunctionComponent = () => {
  const { state } = useContext(CounterContext);
  return <p>Count: {state.count}</p>;
};

export default CounterDisplay;
