// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'; 
import Projects from './components/Project';
import Contact from './components/Contact'; 
import Education from './components/Education';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/education' element={<Education/>}/>
          <Route path="/services" element={<Projects/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    
  );
};

export default App;
