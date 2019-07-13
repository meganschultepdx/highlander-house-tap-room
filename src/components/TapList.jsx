import React from 'react';
import Beer from './Beer';
import Title from './Title';
import wood from '../assets/img/wood.jpg';
import Info from './Info';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <div>
      <style jsx>{`
        #woodbackground {
          background-image: url(${wood});
          background-size: cover;
          background-repeat: repeat;
        } 

        #taptitle {
          color: #947a04;
          font-family: sans-serif;
          font-weight: lighter;
          text-transform: uppercase;
          text-align: center;
          font-size: 2em;
          margin-bottom: 0;
        }

        #tapSubtitle {
          color: #947a04;
          font-family: sans-serif;
          font-weight: lighter;
          text-transform: uppercase;
          text-align: center;
          font-size: 1.5em;
          margin-top: 10px;
        }

        #top-spacer {
          height: 20px;
        }

        #spacer {
          padding-top: 70px;
        }
        `}
      </style>
      <Title />
      <h1 id="taptitle">Welcome!</h1><br />
      <h2 id="tapSubtitle">Here are the beers we currently have on tap:</h2>
      <div id="woodbackground">
        <div id="top-spacer"></div>
        {props.tapList.map((beer, index) =>
          <Beer name={beer.name}
            brewery={beer.brewery}
            price={beer.price}
            abv={beer.abv}
            about={beer.about}
            key={index} />
        )}
        <Info />
        <div id="spacer"></div>
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;