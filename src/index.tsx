import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import CounterDemo from "./demo1-counter";
import FetchDemo from "./demo2-fetch";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <CounterDemo />
      {/* <FetchDemo /> */}
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
