import React from 'react';
import wood from '../assets/img/wood.jpg';


function AddEditKeg() {
  return (
    <div id="employeeBackground">
      <style jsx>{`
        #employeeBackground {
          background-image: url(${wood});
          background-size: cover;
          background-repeat: repeat;
        } 

        .flex-container {
          display: flex;
          justify-content: center;
        }

        #employeePageTitle {
          font-family: sans-serif;
          text-align: center;
          color: grey;
          padding: 80px 200px 100% 200px;
          font-weight: lighter;
          border: 1px solid rgb(0, 0, 0, 0);
          background-color: rgb(0, 0, 0, .6);
          text-transform: uppercase;
        }

        #keg-form {
            font-family: sans-serif;
            width: 500px;
            border: 2px solid rgb(255, 255, 255, 0);
            background-color: rgb(255, 255, 255, .4);;
            border-radius: 8px;
            border-radius: 8px;
            z-index: 1;
            top: 20%;
            position: absolute;
            font-weight: lighter;
            text-align: right;
            margin-top: 80px;
        }

        #form-title {
            padding-left: 5px;
            font-weight: lighter;
            text-transform: uppercase;
            text-align: center;
        }

        label, input, textarea {
            padding: 5px;
            margin: 5px;
            margin-bottom: 10px;
        }

        input, textarea {
          border: 2px solid lightgrey;
          background-color: lightgrey;
          border-radius: 4px;
          width: 200px;
        }

        #keg-input {
          padding-right: 75px;
        }

        .button {
          padding: 10px 30px;
          margin: 20px 0;
          border: 1px solid rgb(0, 0, 0, 0);
          border-radius: 8px;
          background-color: rgb(0, 0, 0, .8);
          width: 200px;
          font-size: 1em;
          color: lightgrey;
        }
        
        .buttons {
          display: flex;
          justify-content: space-evenly;
        }

        `}</style>
      <div className="flex-container">
        <h1 id="employeePageTitle">Employee Page</h1>
        <div id="keg-form">
          <form>
            <h1 id="form-title">Add or Edit a keg:  </h1>
            <div id="keg-input">
              <label>Name of Beer:  </label>
              <input
                type='text'
                id="name" /><br />

              <label>About this beer:  </label>
              <textarea
                type='text'
                id="name" /><br />

              <label>Brewery name:  </label>
              <input
                type='text'
                id="brewery" /><br />

              <label>Price per pint:  </label>
              <input
                type='number'
                id="price" /><br />

              <label>ABV:  </label>
              <input
                type='number' step='.1'
                id="abv" /><br />
            </div>
            <div className="buttons">
              <button className="button" type='submit'>Add Keg</button><br />
              <button className="button" type='submit'>Edit Keg</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEditKeg;