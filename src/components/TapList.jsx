import React from 'react';
import Beer from './Beer';
import Title from './Title';
import wood from '../assets/img/wood.jpg';
import Info from './Info';


let masterTapList = [
  {
    name: 'Lambert Lager',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5',
    about: 'this Lager is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'MacLeaod Märzen',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5.5',
    about: 'This Marzen is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'Immortal IPA',
    brand: 'Highlander Taigh-grùdaidh',
    price: '6',
    abv: '6',
    about: 'this IPA is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'Ramirez Red',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5',
    about: 'this Red Ale is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'Kurgan Kölsch',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '4.5',
    about: 'This Kolsch is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'Princes of the Universe Porter',
    brand: 'Highlander Taigh-grùdaidh',
    price: '6',
    abv: '5',
    about: '“This Porter is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  }

];

function TapList() {
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
        }

        #tapSubtitle {
          color: #947a04;
          font-family: sans-serif;
          font-weight: lighter;
          text-transform: uppercase;
          text-align: center;
          font-size: 1.5em;
        }

        #top-spacer {
          height: 20px;
        }

        #spacer {
          padding-top: 70px;
        }
        `}
        </style>
        <Title/>
      <h1 id="taptitle">Welcome!</h1><br />
      <h2 id="tapSubtitle">Here are the beers we currently have on tap:</h2>
        <div id="woodbackground">
          <div id="top-spacer"></div>
      {masterTapList.map((beer, index) =>
        <Beer name={beer.name}
          brand={beer.brand}
          price={beer.price} 
          abv={beer.abv}
          about={beer.about}
          key={index}/>
      )}
      <Info/>
      <div id="spacer"></div>
      </div>
    </div>
  );
}

export default TapList;