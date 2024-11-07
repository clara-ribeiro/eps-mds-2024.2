import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClaraRibeiro from "./pages/ClaraRibeiro";
import RodrigoAmaral from "./pages/RodrigoAmaral/profile";
import JoaoIgor from "./pages/JoaoIgor/src/App";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clara" element={<ClaraRibeiro />} />
        <Route path="/rodrigo" element={<RodrigoAmaral />} />
        <Route path="/joao" element={<JoaoIgor />} />
      </Routes>
    </Router>
  );
}

export default App;
