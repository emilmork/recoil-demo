import { createContext } from "react";
import { Action } from "./reducer";

export const CounterContext = createContext({
  state: {
    count: 0,
  },
  dispatch: (action: Action) => {},
});
