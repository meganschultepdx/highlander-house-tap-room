import React from 'react';
import highlanderSign from '../assets/img/highlanderSign.png';
import guyPouringBeer from '../assets/img/guyPouringBeer.jpg';

function Title() {
  return (
    <div>
      <style jsx>{`

      #parent {
        position: relative;
      }
 
      #info {
        z-index: 1;
        position: absolute;
        top: 18%;
        left: 21%;
      }

     

      `}</style>
      <div id="parent">
      <img id="beerPour" width="100%" height="auto" src={guyPouringBeer} alt="guy pouring beer"/>
      <div className="flex-container">
        <div id="info">
      <h2>Location: </h2>
      <h2>Hours: </h2>
      <h2>Phone: </h2>
      </div>
      </div>
     </div>
    </div>
  );
}

export default Title;