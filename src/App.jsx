import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Apartments from './components/pages/Apartments';
import Amenities from './components/pages/Amenities';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import BookNow from './components/pages/BookNow';
//import Hero from './components/pages/Hero';


function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/amenities" element={<Amenities />} /> 
        <Route path="/gallery" element={<Gallery />} />     
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<BookNow />} />
       {/*<Route path="hero" element={<Hero/>}/>*/} 
   
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;