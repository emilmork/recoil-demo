import React, { useContext } from "react";
import { CounterContext } from "../context";

type CounterButtonT = {
  increment: () => void;
};

const CounterButton: React.FunctionComponent = () => {
  const { dispatch } = useContext(CounterContext);

  return <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>;
};

export default CounterButton;
