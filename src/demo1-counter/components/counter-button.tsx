import React, { useContext } from "react";
import { useRecoilState } from "recoil";
import { countState } from "../state";

const CounterButton: React.FunctionComponent = () => {
  const [count, setCount] = useRecoilState(countState);

  return <button onClick={() => setCount(count + 1)}>+</button>;
};

export default CounterButton;
