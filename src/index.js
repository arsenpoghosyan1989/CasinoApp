import React from "react";
import ReactDOM from "react-dom";

import CasinoService from "./services/casino-service";
import { CasinoServiceProvider } from "./components/casino-Service-Context";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import App from "./app";

const casinoService = new CasinoService();
console.log(casinoService);

ReactDOM.render(
  <ErrorBoundry>
    <CasinoServiceProvider value={casinoService}>
      <Router>
        <App />
      </Router>
    </CasinoServiceProvider>
  </ErrorBoundry>,
  document.getElementById("root")
);
