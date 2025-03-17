import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import TttNavNar from "./components/TttNavNar";
import TttHome from "./components/TttHome";
import TttAbout from "./components/TttAbout";
import TttContact from "./components/TttContact";
import TttUserList from "./components/TttUserList";
import TttCreateUser from "./components/TttCreateUser";

function TttApp() {
  return (
    <div>
      <TttNavNar />
      <Routes>
        <Route path="/" element={<TttHome />} />
        <Route path="/about" element={<TttAbout />} />
        <Route path="/contact" element={<TttContact />} />
        <Route path="/list-user" element={<TttUserList />} />
        <Route path="/create-user" element={<TttCreateUser />} />
      </Routes>
    </div>
  );
}

export default TttApp;
