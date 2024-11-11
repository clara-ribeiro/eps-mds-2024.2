import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClaraRibeiro from "./pages/ClaraRibeiro";
import RodrigoAmaral from "./pages/RodrigoAmaral/profile";
import AboutMe from "./pages/JorgeHenrique/";
import DannyeclissonRodrigo from './pages/DannyeclissonRodrigo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clara" element={<ClaraRibeiro />} />
        <Route path="/rodrigo" element={<RodrigoAmaral />} />
        <Route path="/jorge" element={<AboutMe />} />
        <Route path="/dannyeclisson" element={<DannyeclissonRodrigo />}/>
      </Routes>
    </Router>
  );
}

export default App;
