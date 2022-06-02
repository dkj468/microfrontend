import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing.js";
import Pricing from "./components/Pricing.js";

const App = ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
  // return <h1>This is App Component</h1>;
};

export default App;
