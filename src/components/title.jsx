import React from 'react';
import highlanderSign from '../assets/img/highlanderSign.png';
import bar from '../assets/img/bar.jpg';

function Title() {

  return (
    <div>
      <style jsx>{`

      #parent {
        position: relative;
      }

      #pint {
        z-index: -1;
      } 

      #sign {
        z-index: 1;
        position: absolute;
        top: 15%;
        left: 21%;
      }

      `}</style>
      <div id="parent">
        <img id="bar" width="100%" height="auto" src={bar} alt="bar" />
        <div className="flex-container">
          <img id="sign" width="60%" src={highlanderSign} alt="highlander sign" />
        </div>
      </div>
    </div>
  );
}

export default Title;