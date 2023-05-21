import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='*' element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            {/* <Route path="/quiz/edit/:gameId" element={<EditQuizPage />}></Route> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
