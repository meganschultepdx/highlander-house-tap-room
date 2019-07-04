import React from 'react';
import Beer from './Beer';


let masterTapList = [
  {
    name: 'Lambert Lager',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5'
  },
  {
    name: 'MacLeaod Märzen',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5.5'
  },
  {
    name: 'Immortal IPA',
    brand: 'Highlander Taigh-grùdaidh',
    price: '6',
    abv: '6'
  },
  {
    name: 'Ramirez Red',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5'
  },
  {
    name: 'Kurgan Kölsch',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '4.5'
  },
  {
    name: 'Princes of the Universe Porter',
    brand: 'Highlander Taigh-grùdaidh',
    price: '6',
    abv: '5'
  }

];



function TapList() {
  return (
    <div>

      {masterTapList.map((beer, index) =>
        <Beer name={beer.name}
          brand={beer.brand}
          price={beer.price} 
          abv={beer.abv}
          key={index}/>
      )}
    </div>
  );
}

export default TapList;