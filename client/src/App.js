import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
