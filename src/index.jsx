import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "./assets/css/global.scss";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import App from "./app.jsx";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

addLocaleData(en);
addLocaleData(ru);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
