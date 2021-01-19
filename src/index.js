import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from "raven-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://fd77c953a1d04817955efe6460d4a96a@o507516.ingest.sentry.io/5598742"
).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
