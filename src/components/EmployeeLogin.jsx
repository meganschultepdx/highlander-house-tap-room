import React from 'react';
import { Link } from 'react-router-dom';
import wood from '../assets/img/wood.jpg';

function EmployeeLogin() {
  return (
    <div>
      <style jsx>{`
        #login-form {
            font-family: sans-serif;
            width: 300px;
            border: 2px solid darkgrey;
            background-color: white;
            border-radius: 8px;
            z-index: 1;
            top: 20%;
            position: absolute;
            margin-left: 10vw;
            margin-top: 50px;
            text-align: center;
            margin-left: 36%;
        }

        #form-title {
            padding-left: 5px;
        }

        label, input {
            padding: 5px;
            margin: 5px;
            margin-bottom: 10px;
        }

        input {
            border: 2px solid lightgrey;
            background-color: lightgrey;
            border-radius: 4px;
        }

        #loginTitle {
          font-family: sans-serif;
          text-align: center;
          color: grey;
          padding-top: 100px;
        }

        #loginButton {
          padding: 10px 20px;
          margin-bottom: 20px;
          border-radius: 4px;
          background-color: grey;
        }
        `}</style>

      <h1 id="loginTitle">Employees must log in to add or edit kegs.</h1>
      <div id="login-form">
        <form>
          <h1 id="form-title">Employee Login</h1>
          <label>Username/email:  </label><br />
          <input
            type='text'
            id="username" /><br />
          <label>Passord:  </label><br />
          <input
            type='text'
            id="password" /><br />
          <button id="loginButton" type='submit'><Link to="/addEditKeg">Login</Link></button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeLogin;