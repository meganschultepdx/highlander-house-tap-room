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
          width: 100%;
          background: rgb(7, 71, 7, .7);
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
        color: black;
      }

      #login {
        padding-left: 20px;
        justify-contents: right;
      }

      a {
        color: #FFF;
      }
      a:hover {
         color: #00F
      }

      a:-webkit-any-link {
        color: black;
      }

      `}</style>
      <navbar id="navbar">
        <div className="flex-container">
          <div className="link">
            <Link to="/">Home</Link>  |  <Link to="/about">About</Link>  |   <Link id="login" to="/employeeLogin">Employee Login</Link>
          </div>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;