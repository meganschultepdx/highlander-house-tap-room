import React from 'react';

function AddKegForm() {
  let _name = null;
  let _about = null;
  let _brewery = null;
  let _price = null;
  let _abv = null;

  function handleAddKegFromSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_about.value);
    console.log(_brewery.value);
    console.log(_price.value);
    console.log(_abv.value);
    _name.value='';
    _about.value='';
    _brewery.value='';
    _price.value='';
    _abv.value='';
  }

  return (
    <div className="flex-container">
      <style jsx>{`
        
        .flex-container {
          display: flex;
          justify-content: center;
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

      <div id="keg-form">
        <form onSubmit={handleAddKegFromSubmission}>
          <h1 id="form-title">Add or Edit a keg:  </h1>
          <div id="keg-input">
            <label>Name of Beer:  </label>
            <input
              type='text'
              id="name"
              ref={(input) => {_name = input;}} /><br />
              

            <label>About this beer:  </label>
            <textarea
              type='text'
              id="about"
              ref={(input) => {_about = input;}} /><br />
              

            <label>Brewery name:  </label>
            <input
              type='text'
              id="brewery" 
              ref={(input) => {_brewery = input;}} /><br />
              

            <label>Price per pint:  </label>
            <input
              type='number'
              id="price" 
              ref={(input) => {_price = input;}} /><br />
              

            <label>ABV:  </label>
            <input
              type='number' step='.1'
              id="abv" 
              ref={(input) => {_abv = input;}} /><br />
              
          </div>
          <div className="buttons">
            <button className="button" type='submit'>Add Keg</button><br />
          </div>
        </form>

      </div>
    </div>
  );
}

export default AddKegForm;