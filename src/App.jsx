import './App.css';
import './fonts.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import SimulatedEcology from './pages/projects/SimulatedEcology';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/simulated-ecology" element={<SimulatedEcology />} />
      </Routes>
    </HashRouter>
  );
}

export default App;