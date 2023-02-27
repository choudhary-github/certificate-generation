import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Forms from "./components/Forms/Forms";
import Certificate1 from "./components/Certificate/Certificate1";

export default function ElevateAppBar(props) {
  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/certificate1" element={<Certificate1 />} />
        </Routes>
      </div>
    </>
  );
}
