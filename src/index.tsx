import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './i18n/i18n.ts';

ReactDOM.render(
    <Suspense fallback={<div>...</div>}>
        <App />
    </Suspense>
    ,
    document.getElementById("root"));
