import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='*' element={<Home />}></Route>
            {/* <Route path="/dashboard" element={<DashboardScreen />}></Route>
            <Route path="/quiz/edit/:gameId" element={<EditQuizPage />}></Route> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
