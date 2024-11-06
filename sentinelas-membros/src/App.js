import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClaraRibeiro from "./pages/ClaraRibeiro";
import RodrigoAmaral from "./pages/RodrigoAmaral/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clara" element={<ClaraRibeiro />} />
        <Route path="/rodrigo" element={<RodrigoAmaral />} />
      </Routes>
    </Router>
  );
}

export default App;
