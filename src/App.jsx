import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Forms from "./components/Forms/Forms";
import Certificate from "./components/Certificate/Certificate";

export default function ElevateAppBar(props) {
  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </div>
    </>
  );
}
