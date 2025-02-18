import React from 'react';
import TttJsxExpression from "./components/TttJsxExpression";
import TttFuncComp from "./components/TttFuncComp";
import TttClassComp from "./components/TttClassComp";

function TttApp() {
  return (
    <div className="container border mt-3 bg-white">
        <h1>React JS lesson 3 - Trần Thanh Tùng</h1>
        <TttJsxExpression />
        <hr />
        {/* Sử dụng function component */}
        <TttFuncComp />
        {/* Sử dụng class component */}
        <TttClassComp />
    </div>
  );
}

export default TttApp;
