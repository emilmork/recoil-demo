import React from "react";
import ReactDOM from "react-dom";
import CounterDemo from "./demo1-counter";
import FetchDemo from "./demo2-fetch";

ReactDOM.render(
  <React.StrictMode>
    <CounterDemo />
    {/* <FetchDemo /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
