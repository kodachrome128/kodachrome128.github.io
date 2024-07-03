import './App.css';
import './fonts.css';
import { HashRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import SimulatedEcology from './pages/projects/SimulatedEcology';
import DungeonMania from './pages/projects/DungeonMania';
import LurkForWork from './pages/projects/LurkForWork';
import Videophone from './pages/projects/Videophone';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/simulated-ecology" element={<SimulatedEcology />} />
        <Route path="/projects/dungeonmania" element={<DungeonMania />} />
        <Route path="/projects/lurkforwork" element={<LurkForWork />} />
        <Route path="/projects/videophone" element={<Videophone />} />
      </Routes>
    </HashRouter>
  );
}

export default App;