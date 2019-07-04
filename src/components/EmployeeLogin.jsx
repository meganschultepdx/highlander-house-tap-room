import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeLogin() {
  return (
    <div>
      <style jsx>{`
        #login-form {
            font-family: sans-serif;
            width: 300px;
            border: 2px solid white;
            background-color: white;
            border-radius: 8px;
            z-index: 1;
            top: 20%;
            position: absolute;
            margin-left: 10vw;
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
        `}</style>
      <div id="login-form">
        <form>
          <h1 id="form-title">Employee Login</h1>
          <label>Username/email:  </label><br />
          <input
            type='text'
            id="username" />
          <label>Passord:  </label><br />
          <input
            type='text'
            id="password" />
          <button type='submit'><Link to="/addEditKeg">Login</Link></button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeLogin;