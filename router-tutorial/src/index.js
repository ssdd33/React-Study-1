import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/* 
BrowserRouter component: 웹 어플리케이션에 HTML5의 History API를 사용하여 
페이지를 새로고침하지 않고도 주소를 변경하고, 현재 주소에 관련된 정보를
 props로 쉽게 조회하거나 사용할 수 있도로 해준다.
*/
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
