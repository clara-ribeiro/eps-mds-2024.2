import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ClaraRibeiro from './pages/ClaraRibeiro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clara" element={<ClaraRibeiro/>}/>
      </Routes>
    </Router>
  );
}

export default App;