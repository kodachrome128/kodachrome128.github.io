import './App.css';
import './fonts.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;