import './App.css';
import './fonts.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Use exact prop to match the exact path */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;