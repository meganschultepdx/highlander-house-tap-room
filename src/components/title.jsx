import React from 'react';
import highlanderSign from '../assets/img/highlanderSign.png';
import pint from '../assets/img/pint.jpg';

function Title() {
  return (
    <div>
      <style jsx>{`
         .flex-container {
           display: flex;
         } 
        


    
          `}</style>
      <img id="pint" width="100%" height="auto" src={pint} alt="pint of beer"/>
      <div className="flex-container">
      <img id="sign" width="600px" src={highlanderSign} alt="highlander sign"/>
     </div>
    </div>
  );
}

export default Title;