import React from 'react';
import highlanderSign from '../assets/img/highlanderSign.png';
import guyPouringBeer from '../assets/img/guyPouringBeer.jpg';

function Title() {
  return (
    <div>
      <style jsx>{`

      #parent {
        position: relative;
        margin-top: 40px;
      }
 
      #info {
        z-index: 1;
        position: absolute;
        top: 5%;
        left: 5%;
        color: lightgrey;
        font-family: sans-serif;
        border: 1px solid rgb(255, 255, 255, 0);
        border-radius: 8px;
        background-color: rgb(255, 255, 255, .1);
        padding: 30px;
      }

      .infoTitle {
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 2em;
      }

      .info {
        font-weight: lighter;
        padding-left: 20px;
        font-size: 1.5em;
      }

     

      `}</style>
      <div id="parent">
      <img id="beerPour" width="100%" height="auto" src={guyPouringBeer} alt="guy pouring beer"/>
      <div className="flex-container">
        <div id="info">
      <h2 className="infoTitle">Location: </h2>
      <h3 className="info">558 Willoway Lane<br />
      Andersonville, WA 99881</h3>
      <h2 className="infoTitle">Hours: </h2>
      <h3 className="info">Thursday - Sunday: 11am - 2am<br />
      Monday - Wednesday: 4pm - 11pm</h3>
      <h2 className="infoTitle">Phone: </h2>
      <h3 className="info">(999)881-beer</h3>
      </div>
      </div>
     </div>
    </div>
  );
}

export default Title;