import React from "react";
import { Link } from "react-router-dom";

function TttNavbar() {
  return (
    <nav>
      <h2>React Router Dom - Demo</h2>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About Us</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/list-user">List User</Link> |{" "}
      <Link to="/create-user">Create User</Link>
    </nav>
  );
}

export default TttNavbar;
