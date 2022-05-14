import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// when in Development or running in isolation then call mount
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_marketing-dev-mfe");
  if (el) {
    mount(el);
  }
}

// when running through container then export the mount

export { mount };
