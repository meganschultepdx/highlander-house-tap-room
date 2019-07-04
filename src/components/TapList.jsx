import React from 'react';
import Beer from './Beer';
import ouf from '../assets/img/ouf.jpg';

let masterTicketList = [
  {
    name: 'Lambert Lager',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5%'
  },
  {
    name: 'MacLeaod Märzen',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5.5%'
  },
  {
    name: 'Immortal IPA',
    brand: 'Highlander Taigh-grùdaidh',
    price: '6',
    abv: '6%'
  },
  {
    name: 'Ramirez Red',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '5%'
  }
  {
    name: 'Kurgan Kölsch',
    brand: 'Highlander Taigh-grùdaidh',
    price: '5',
    abv: '4.5%'
  }
  {
    name: 'Princes of the Universe Porter',
    brand: 'Highlander Taigh-grùdaidh',
    price: '6',
    abv: '5%'
  }

];



function TapList() {
  return (
    <div>
      <img id="ouf" width="100%" src={ouf}/>
      {masterTapList.map((beer, index) =>
        <Beer name={ticket.name}
          brand={ticket.brand}
          price={ticket.price} 
          abv={ticket.abv}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;