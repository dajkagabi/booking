import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Accommodations from './components/pages/Accommodations';
import Experiences from './components/pages/Experiences';    
import Contact from './components/pages/Contact';
import BookNow from './components/pages/BookNow';          
import Hero from './components/pages/Hero';


function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="hero" element={<Hero/>}/>
   
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;