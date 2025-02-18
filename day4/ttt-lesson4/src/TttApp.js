
import React, { useState } from "react";
import TttInfoState from "./components/TttInfoState";
import TttInfoProps from "./components/TttInfoProps";

function TttApp() {
  const [user, setUser] = useState({
    fullName: "Tung",
    age: 20,
    phone: "0975876450",
  });

  const changeInfo = () => {
    setUser({
      fullName: "Nguyễn Văn A",
      age: 25,
      phone: "0987654321",
    });
  };

  return (
    <div style={{ padding: "20px", background: "#e0f2f1" }}>
      <TttInfoState user={user} changeInfo={changeInfo} />
      <TttInfoProps name="K23CNT1" fullName="Chạch Văn Doành" />
      <TttInfoState user={user} changeInfo={changeInfo} />
      <TttInfoProps name="K23CNT1" fullName="Chạch Văn Doành" />
    </div>
  );
}

export default TttApp; // Chỉ có 1 dòng export default
