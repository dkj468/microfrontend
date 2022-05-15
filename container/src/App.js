import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./component/MarketingApp";
import Header from "./component/Header";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
