import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Committee from './components/Committee/Committee';
import Papers from './components/Papers/Papers';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/committee" element={<Committee/>} /> 
        <Route path="/call-for-papers" element={<Papers/>} /> 
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
