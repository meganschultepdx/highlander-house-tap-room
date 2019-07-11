import React from 'react';


function Footer() {
  return (
    <div>
      <style jsx>{`
        #footer {
          font-family: sans-serif;
          letter-spacing: 1px;
          display: inline;
          text-align: center;
          width: 100%;
          background: rgb(7, 55, 7, .7);
          position: fixed;
          bottom: 0;
          height: 60px;
          z-index: 10;
        }

      #myCredit {
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 1em;
        padding-top: 20px;
      }

      `}</style>
      <div id="footer">
        <h3 id="myCredit">2019 by Megan Schulte</h3>
      </div>
    </div>
  );
}

export default Footer;