import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import logger from "./services/logService.js";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
