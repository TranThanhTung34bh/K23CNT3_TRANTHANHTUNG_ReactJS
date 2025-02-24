import React, { useState } from "react";
import TttFuncCompEvent from "./components/TttFuncCompEvent";
import TttClassCompEvent from "./components/TttClassCompEvent";
import TttFuncCompWithProps from "./components/TttFuncCompWithProps";
import TttClassCompWithProps from "./components/TttClassCompWithProps";
import TttClassCompWithState from "./components/TttClassCompWithState";
import TttClassCompPostData from "./components/TttClassCompPostData";
import "./App.css";

const TttApp = () => {
  const [data, setData] = useState("");

  const handleDataReceive = (dataFromChild) => {
    setData(dataFromChild);
  };

  return (
    <div className="container">
      <h2 className="header">K23CNT3 - Trần Thanh Tùng - Event and Form</h2>
      <TttFuncCompEvent />
      <TttClassCompEvent />
      <TttFuncCompWithProps buttonText1="Button 1" buttonText2="Button 2" />
      <TttClassCompWithProps buttonText="Button 1" />
      <TttClassCompWithState />
      <TttClassCompPostData onDataReceive={handleDataReceive} />
      {data && <p className="data-display">Dữ liệu nhận từ component con: {data}</p>}
    </div>
  );
};

export default TttApp;
