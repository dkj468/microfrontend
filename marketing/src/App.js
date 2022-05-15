import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing.js";
import Pricing from "./components/Pricing.js";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
  // return <h1>This is App Component</h1>;
};

export default App;
