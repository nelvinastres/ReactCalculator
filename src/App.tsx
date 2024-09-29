import React from 'react';
// import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Calculator from './components/Calculator';
import Helppage from './components/Helppage';
import Thankyou from './components/Thankyou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />}/>
        <Route path="/helppage" element={<Helppage />}/>
        <Route path="/Thankyou" element={<Thankyou />}/>
      </Routes>
    </Router>
  );
}

export default App;
