
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'overlayscrollbars/overlayscrollbars.css';
import { BrowserRouter } from "react-router-dom";


// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
