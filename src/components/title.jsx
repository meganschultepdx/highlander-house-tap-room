import React from 'react';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div>
      <style jsx>{`
        #title {
          font-family: sans-serif;
          text-align: center;
          text-transform: uppercase;
          `}</style>
    <h1 id="title">Highlander Tap House</h1>
    <h3 id="subtitle">There can only be one!</h3>
    </div>
  );
}

export default Title;