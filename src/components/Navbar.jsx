import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <style jsx>{`
        #navbar {
          font-family: sans-serif;
          letter-spacing: 1px;
          display: inline;
          color: white;
          width: 100%;
          background: rgb(7, 71, 7, .7);
          position: fixed;
          top: 0;
          height: 50px;
        }

      .link {
        padding: 20px;
        text-transform: uppercase;
        color: black;
      }

      #login {
        padding-left: 20px;
      }

      `}</style>
      <navbar id="navbar">
        <div className="link">
        <Link to="/">Home</Link>  |  <Link to="/about">About</Link>  |   <Link id="login" to="/employeeLogin">Employee Login</Link>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;