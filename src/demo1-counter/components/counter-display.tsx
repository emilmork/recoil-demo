import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import { countState } from "../state";

const CounterDisplay: React.FunctionComponent = () => {
  const count = useRecoilValue(countState);
  return <p>Count: {count}</p>;
};

export default CounterDisplay;
