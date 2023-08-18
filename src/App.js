import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Home from './pages/home/index';
import About from './pages/about/index';
import Programs from './pages/programes/index';
import Contacts from './pages/contact/index';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
