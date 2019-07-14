import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style jsx>{`

        .list {
          text-align: left;
          background-color: black;
          border: solid 1px rgb(89, 92, 90, .5);
          background-color: rgb(89, 92, 90, .5);
          border-radius: 4px;
          width: 300px;
          height: 325px;
          margin-bottom: 20px;
        }

        #keg-name {
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
          padding-top: 6px;
        }

        
        `}</style>

      <div className="flex-container">
        <div className="list">
          <div id="info-box">
            <h1 id="keg-name">{props.name}  -  ${props.price} pint <button style={{marginLeft: '20px', marginRight: '10px'}} onClick={() => {props.onSellingPint;}}>Pint Sold</button> <span style={{fontSize: '.5em'}}>pints left: {props.pintsLeft}</span></h1>
            <h3>{props.about}</h3>
            <h3 id="brewery"><b>Brewed by:  </b> {props.brewery}</h3>
            <h3 id="abv"><b>ABV:  </b>{props.abv}%</h3>
          </div>
        </div>
      </div>
    </div>
  );

}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  about: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onSellingPint: PropTypes.func,
  pintsLeft: PropTypes.number
};

export default Keg;