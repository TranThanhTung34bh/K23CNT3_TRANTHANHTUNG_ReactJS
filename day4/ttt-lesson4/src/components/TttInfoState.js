import React from "react";

function TttInfoState({ user, changeInfo }) {
  return (
    <div style={{ background: "#c8e6c9", padding: "20px", marginBottom: "20px", borderRadius: "8px" }}>
      <h3>Ttt - Trình bày dữ liệu từ state</h3>
      <p>info state (fullName): {user.fullName}</p>
      <p>info state (age): {user.age}</p>
      <p>info state (phone): {user.phone}</p>
      <button onClick={changeInfo} style={{ padding: "5px 10px", background: "blue", color: "#fff", border: "none", borderRadius: "4px" }}>
        Change Info
      </button>
    </div>
  );
}

export default TttInfoState;
