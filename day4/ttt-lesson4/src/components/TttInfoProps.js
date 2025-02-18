import React from "react";

function TttInfoProps({ name, fullName }) {
  return (
    <div style={{ background: "#c8e6c9", padding: "20px", marginBottom: "20px", borderRadius: "8px" }}>
      <h3>Ttt - Lấy dữ liệu từ Props</h3>
      <p>Name: {name}</p>
      <p>FullName: {fullName}</p>
    </div>
  );
}

export default TttInfoProps;
