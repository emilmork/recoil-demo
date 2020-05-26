import React, { useContext } from "react";
import { CounterContext } from "../context";

const CounterButton: React.FunctionComponent = () => {
  const { dispatch } = useContext(CounterContext);

  return <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>;
};

export default CounterButton;
