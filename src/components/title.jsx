import React from 'react';

function Title() {
  return (
    <div>
      <style jsx>{`
        #title {
          font-family: sans-serif;
          text-align: center;
          text-transform: uppercase;
        }
        #subtitle {
          font-family: sans-serif;
          text-align: center;
        }
          `}</style>
      <h1 id="title">Highlander Tap House</h1>
      <h3 id="subtitle">There can only be one!</h3>
    </div>
  );
}

export default Title;