import React from "react";
import TttUseState from "./components/TttUseState";
import TttUseStateListObject from "./components/TttUseStateListObject";
import TttEffect1 from "./components/TttEffect1";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hook</h1>
      <TttUseState />
      <TttUseStateListObject />
      <TttEffect1 />
    </div>
  );
};

export default App;
