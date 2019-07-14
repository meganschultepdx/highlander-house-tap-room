import React from 'react';
import highlanderCastle from '../assets/img/highlanderCastle.jpg';

function About() {
  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Armata|Glegoo|Literata|Oswald:300,400&display=swap');
      
        #about{
          color: darkgrey;
          text-align; center;
          padding-top: 50px;
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }

        #aboutTitle {
          font-family: Armata,sans-serif;
          text-align; center;
          color: #947a04;
        }

        #aboutBody {
          font-family: oswald,sans-serif;
        }

        #aboutBody2 {
          font-family: oswald,sans-serif;
        }

        #castle {
          margin-bottom: 90px;
        }

          `}</style>
      <div id="about">
        <h1 style={{textAlign: 'center'}} id="aboutTitle">About our Tap House and Brewery</h1>
        <p id="aboutBody">Inspired by the cult classic movie Highlander and our love for Scotland and it's rugged landscape, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p id="aboutBody2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <img id="castle" width="100%" height="auto" src={highlanderCastle} alt="castle"/>
      </div>
    </div>
  );
}

export default About;