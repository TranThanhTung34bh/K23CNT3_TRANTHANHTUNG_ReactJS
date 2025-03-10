import React, { useEffect, useState } from "react";

const TttEffect1 = () => {
  const [message, setMessage] = useState("useEffect");

  useEffect(() => {
    console.log("Component TttEffect1 mounted!");
    return () => console.log("Component TttEffect1 unmounted!");
  }, []);

  return (
    <div style={{ background: "#f8d7da", padding: "10px", borderRadius: "5px" }}>
      <h3>{message}</h3>
      <button onClick={() => setMessage("useEffect updated!")}>Click</button>
    </div>
  );
};

export default TttEffect1;
