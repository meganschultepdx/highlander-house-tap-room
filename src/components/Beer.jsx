import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`

        .flex-container {
          display: flex;
          justify-contents: center;
        }

        .list {
          text-align: left;
          background-color: black;
          border: solid 1px rgb(89, 92, 90, .5);
          background-color: rgb(89, 92, 90, .5);
          border-radius: 4px;
          width: 50%;
          height: auto;
          width: 2fr;
          margin-left: 25%;
          margin-bottom: 20px;
        }

        #beer-name {
          text-transform: uppercase;
          font-weight: lighter;
          color: #bda30b;
          font-size: 1.5em;
          font-family: sans-serif;
          border: solid 1px rgb(89, 92, 90, .7);
          background-color: rgb(89, 92, 90, .7);
          border-radius: 4px;
          padding: 20px 10px 20px 10px;
        }

        h3 {
          font-weight: lighter;
          font-size: 1em;
          color: #ccc38d;
          font-family: sans-serif;
          letter-spacing: 1px;
          padding-left: 10px;
        }
        
        `}</style>

        <div className="flex-container">
          <div id="list"></div>
          <div className="list">
            <h1 id="beer-name" className="flip" onclick="myFunction()">{props.name}  -  ${props.price} per pint</h1>
            <div id="info-box">
              <h3>{props.about}</h3>
              <h3 id="brand"><b>Brewed by:  </b> {props.brand}</h3>
              <h3 id="abv"><b>ABV:  </b>{props.abv}%</h3>
            </div>
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