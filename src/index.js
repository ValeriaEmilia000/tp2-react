import React from 'react';
import reactDom from "react-dom/client";
import "./styles(para index).css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";

const root= reactDom.createRoot(document.getElementById('root'));

root.render()(
<App></App>
);