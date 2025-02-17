import React from "react";
import TttCompInfor from "./TttCompInfor";

function App() {
  const personalInfo = {
    fullName: "Trần Thanh Tùng",
    studentId: "2310900115",
    birthDate: "30/05/2005",
    phone: "0975876450",
    className: "K23CNT3"
  };

  return (
    <div className="App">
      <h1>Thông tin cá nhân</h1>
      <TttCompInfor info={personalInfo} />
    </div>
  );
}

export default App;
