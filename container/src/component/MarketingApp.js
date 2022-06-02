import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  // callback which will be called from Marketing APP
  // when user navigates inside marketing application
  // marketing app uses 'MemoryHistory' for production mode
  // and 'BrowserHistory' for development mode (running in isolation)

  // MARKETING ----> CONTAINER navigation
  const onMarketingNavigation = ({ pathname }) => {
    // console.log(location);
    // console.log("Navigation happened inside Marketing app");
    if (history.location.pathname !== pathname) {
      history.push(pathname);
    }
  };
  useEffect(() => {
    const { onContainerNavigation } = mount(ref.current, {
      onMarketingNavigation,
    });

    history.listen(onContainerNavigation);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
