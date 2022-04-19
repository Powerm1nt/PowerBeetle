import React from "react";
import ReactDOM from "react-dom";
import "./Common/Styling/main.scss";
import * as serviceWorkerRegistration from "./Common/Pwa/serviceWorkerRegistration";
import MainView from "./Views/MainView/MainView";

ReactDOM.render(<MainView />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
