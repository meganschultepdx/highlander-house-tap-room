import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <style jsx>{`
        #navbar {
          display: inline;
          width: 100%;
          background: rgb(7, 55, 7, .7);
          position: fixed;
          top: 0;
          height: 50px;
          z-index: 10;
        }

        .flex-container {
          display: flex;
        }

        .link {
          padding: 20px;
          text-transform: uppercase;
          color: darkgrey;
          font-family: sans-serif;
          letter-spacing: 1px;
          justify-contents: space-evenly;
        }

        .link:hover {
          color: #00F
        }

        #login-link {
          padding-right: 20px;
          display: react;
          justify-contents: right;
        }

      `}</style>
      <navbar id="navbar">
        <div className="flex-container">
          <div className="link">
          <Link style={{ color: 'darkgrey'}} id="homeLink"  to="/">Home</Link>  |  <Link style={{ color: 'darkgrey'}} id="aboutLink"  to="/about">About</Link>  |   <Link style={{ color: 'darkgrey'}} id="contactLink"  to="/contact">Contact Us</Link>   |   <Link style={{ color: 'darkgrey'}} id="login-link"  to="/employeeLogin">Employee Login</Link>
          </div>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;
