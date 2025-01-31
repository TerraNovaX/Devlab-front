import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Formation from "./pages/Formation";
import DropOffDevice from "./pages/DropOffDevice";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Formation" element={<Formation />} />
          <Route path="/DropOffYourDevice" element={<DropOffDevice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
