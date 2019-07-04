import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <style jsx>{`
        navbar {
          font-family: sans-serif;
          display: inline
          text-transform: uppercase;

      `}</style>
      <div id="navbar">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Navbar;