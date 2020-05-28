import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import CounterDemo from "./demo1-counter";
import FetchDemo from "./demo2-fetch";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "200px" }}>
          <CounterDemo />
        </div>
        <div style={{ width: "200px" }}>
          <FetchDemo />
        </div>
      </div>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
