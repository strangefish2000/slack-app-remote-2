import React from "react";
import ReactDOM from "react-dom";
import Slack from "./Slack";

const testChannels = [
  { name: "general" },
  { name: "help" },
  { name: "react" },
  { name: "redux" },
  { name: "webpack" },
  { name: "react-router" }
];

ReactDOM.render(
  <Slack channels={testChannels} />,
  document.querySelector("#root")
);
