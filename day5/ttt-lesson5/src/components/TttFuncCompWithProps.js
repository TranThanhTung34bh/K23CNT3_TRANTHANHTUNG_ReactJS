import React from "react";

const TttFuncCompWithProps = ({ buttonText1, buttonText2 }) => {
  return (
    <div className="section blue">
      <h3>Function Component - Event; props</h3>
      <button className="btn blue">{buttonText1}</button>
      <button className="btn green">{buttonText2}</button>
    </div>
  );
};

export default TttFuncCompWithProps;
