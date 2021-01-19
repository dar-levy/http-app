import Raven from "raven-js";

function init() {
  Raven.config(
    "https://fd77c953a1d04817955efe6460d4a96a@o507516.ingest.sentry.io/5598742"
  ).install();
}
function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
