import React from 'react';
import Beer from './Beer';
import Title from './Title';


let masterTapList = [
  {
    name: 'Lambert Lager',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5',
    about: '“this Lager is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'MacLeaod Märzen',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5.5',
    about: '“This Marzen is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'Immortal IPA',
    brand: 'Highlander Taigh-grùdaidh',
    price: '6',
    abv: '6',
    about: '“ this IPA is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'Ramirez Red',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5',
    about: '“this Red Ale is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'Kurgan Kölsch',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '4.5',
    about: '“This Kolsch is Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
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
      <Title/>
      <style jsx>{`
        #taptitle {
          color: white;
          font-family: sans-serif;
          font-weight: lighter;
          text-transform: uppercase;
          text-align: center;
          font-size: 2em;
        }
        `}
        </style>
      <h1 id="taptitle">The beers we currently have on Tap:</h1>
      {masterTapList.map((beer, index) =>
        <Beer name={beer.name}
          brand={beer.brand}
          price={beer.price} 
          abv={beer.abv}
          about={beer.about}
          key={index}/>
      )}
    </div>
  );
}

export default TapList;