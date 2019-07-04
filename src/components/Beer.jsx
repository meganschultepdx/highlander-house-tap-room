import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div>
      <style jsx>{`
        div{
          background-color: #04b3b3;
          font-family: sans-serif;
          margin-left: 100px;
          margin-right: 100px;
        }
        `}</style>
      <h1 id="beer-name">{props.name}  -  ${props.price} per pint</h1>
      <hr/>
      <h3>{props.about}</h3>
      <h3 id="brand">Brewed by:  {props.brand}</h3>
      <h3 id="abv">ABV:  {props.abv}%</h3>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number
};

export default Beer;