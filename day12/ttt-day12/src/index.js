import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TttApp from "./TttApp";

const Tttroot = ReactDOM.createRoot(document.getElementById("Tttroot"));

Tttroot.render(
  <BrowserRouter>
    <TttApp />
  </BrowserRouter>
);
