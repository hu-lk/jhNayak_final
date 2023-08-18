import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  return (
    <nav>
      <ul>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/about">About</Link></ul>
        <ul><Link to="/programs">Programs</Link></ul>
        <ul><Link to="/contacts">Contacts</Link></ul>
      </ul>
    </nav>
  );
};

export default Navbar;
