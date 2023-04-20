import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App";
import state from "./data/data";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ScrollToTop from "./scrollToTop/scrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/kugoo-scooter">
      <ScrollToTop />
      <App state={state} />
    </BrowserRouter>
  </Provider>
);
