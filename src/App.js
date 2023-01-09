import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AComp from "./AComp";
import BComp from "./BComp";

function App() {
  return (
    <div>
      <Link to="/a" data-test="a-link">Navigate to A</Link>
      <Link to="/b" data-test="b-link">Navigate to B</Link>
      <Routes>
        <Route path="/a" element={<AComp />} />
        <Route path="/b" element={<BComp />} />
      </Routes>
    </div>
  );
}

export default App;
