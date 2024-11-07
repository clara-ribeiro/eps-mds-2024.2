import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ClaraRibeiro from './pages/ClaraRibeiro';
import DannyeclissonRodrigo from './pages/DannyeclissonRodrigo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clara" element={<ClaraRibeiro />}/>
        <Route path="/dannyeclisson" element={<DannyeclissonRodrigo />}/>
      </Routes>
    </Router>
  );
}

export default App;
