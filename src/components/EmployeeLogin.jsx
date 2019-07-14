import React from 'react';
import wood from '../assets/img/wood.jpg';
import PropTypes from 'prop-types';

function EmployeeLogin(props) {
  return (
    <div id="loginBackground">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Armata|Glegoo|Literata|Oswald:300,400&display=swap');

        #loginBackground {
          background-image: url(${wood});
          background-size: cover;
          background-repeat: repeat;
        } 

        #login-form {
            font-family: sans-serif;
            width: 300px;
            border: 2px solid rgb(255, 255, 255, 0);
            background-color: rgb(255, 255, 255, .4);
            border-radius: 8px;
            z-index: 1;
            top: 22%;
            position: absolute;
            margin-top: 70px;
            text-align: center;
        }

        #form-title {
            padding-left: 5px;
            font-family: Armata;
        }

        label, input {
            padding: 5px;
            margin: 5px;
            margin-bottom: 10px;
            font-family: oswald, sans-serif;
        }

        input {
            border: 2px solid lightgrey;
            background-color: lightgrey;
            border-radius: 4px;
            width: 200px;
        }

        #loginTitle {
          font-family: Armata,sans-serif;
          text-align: center;
          color: #947a04;
          padding: 100px 20px 100% 20px;
          font-weight: lighter;
          border: 1px solid rgb(0, 0, 0, 0);
          background-color: rgb(0, 0, 0, .6);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        #loginButton {
          padding: 10px 30px;
          margin: 20px 0;
          border: 1px solid rgb(0, 0, 0, 0);
          border-radius: 8px;
          background-color: rgb(0, 0, 0, .8);
          font-family: oswald, sans-serif;
          color: grey;
        }

        .flex-container {
          display: flex;
          justify-content: center;
        }
        `}</style>
      <div className="flex-container">
        <h1 id="loginTitle">Employees must log in to add or edit kegs.</h1>
        <div id="login-form">
          <form>
            <h1 id="form-title">Employee Login</h1>
            <label>Username/email:  </label><br />
            <input required
              type='text'
              id="username" /><br />
            <label>Password:  </label><br />
            <input required
              type='text'
              id="password" /><br />
            <button id="loginButton" onClick={props.onEmployeeLoginSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

EmployeeLogin.propTypes = {
  onEmployeeLoginSubmit: PropTypes.func
};

export default EmployeeLogin;