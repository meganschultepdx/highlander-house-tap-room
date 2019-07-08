import React from 'react';
import highlanderCastle from '../assets/img/highlanderCastle.jpg';

function About() {
  return (
    <div>
      <style jsx>{`
        #about{
          color: darkgrey;
          font-family: sans-serif;
          text-align; center;
          font-weight: lighter;
          padding-top: 50px;
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }

        #aboutTitle {
          font-weight: lighter:
        }

        #castle {
          margin-bottom: 90px;
        }

          `}</style>
      <div id="about">
        <h1 id="aboutTitle">About our Tap House and Brewery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <img id="castle" width="100%" height="auto" src={highlanderCastle} alt="castle"/>
      </div>
    </div>
  );
}

export default About;