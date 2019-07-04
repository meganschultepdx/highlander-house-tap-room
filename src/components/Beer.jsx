import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`

        .beers {
          font-size: 1em;
          padding: 20px;
          text-align: left;
          padding-left: 20%;
          background-color: black;
          font-family: sans-serif;
          color: white;
          border: solid 2px rgb(89, 92, 90, .7);
          border-radius: 4px;
          height: 200px;
          width: 2fr;
          font-weight: lighter;
        }



        `}</style>
      <div className="flex-container">
        <div className="beers">
        <h1 id="beer-name" className="flip" onclick="myFunction()">{props.name}  -  ${props.price} per pint</h1>
      
          <h3>{props.about}</h3>
          <h3 id="brand">Brewed by:  {props.brand}</h3>
          <h3 id="abv">ABV:  {props.abv}%</h3>
        </div>
      </div>
    </div>
  );

  function myFunction() {
    document.getElementById("panel").style.display = "block";
  }
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  about: PropTypes.text
};

export default Beer;