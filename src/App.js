// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes from react-router-dom
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/AboutUs';
import Servicepage from './components/pages/ServicersPage';

function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-page" element={<Servicepage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
