import React from "react";
import { Route, Routes } from "react-router-dom";
import AComp from "./AComp";
import BComp from "./BComp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/a" element={<AComp />} />
        <Route path="/b" element={<BComp />} />
      </Routes>
    </div>
  );
}

export default App;
