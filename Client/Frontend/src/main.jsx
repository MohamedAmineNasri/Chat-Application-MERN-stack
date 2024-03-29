import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/common.css";
import "./Styles/chatroom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
