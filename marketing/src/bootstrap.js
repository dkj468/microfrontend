import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

// mount function

const mount = (el, { onMarketingNavigation }) => {
  const history = createMemoryHistory();
  if (onMarketingNavigation) {
    history.listen(onMarketingNavigation);
  }
  ReactDOM.render(<App history={history} />, el);

  // returns a callback which will be called from
  // container application. this callback will sync
  // container history with marketing app history
  return {
    onContainerNavigation: ({ pathname }) => {
      if (history.location.pathname !== pathname) {
        history.push(pathname);
      }
    },
  };
};

// when in Development or running in isolation then call mount
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_marketing-dev-mfe");
  if (el) {
    mount(el, {});
  }
}

// when running through container then export the mount

export { mount };
