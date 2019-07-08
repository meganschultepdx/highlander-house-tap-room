import React from 'react';
import pint from '../assets/img/pint.jpg';

function Contact() {
  return (
    <div>
      <style jsx>{`
     
      #parent {
        position: relative;
        margin-top: 40px;
      }
 
      #contact {
        z-index: 1;
        position: absolute;
        top: 10%;
        left: 5%;
        color: lightgrey;
        font-family: sans-serif;
        border: 1px solid rgb(255, 255, 255, 0);
        border-radius: 8px;
        background-color: rgb(255, 255, 255, .1);
        padding: 30px;
      }

      .contactTitle {
        text-transform: uppercase;
        font-weight: lighter;
        font-size: 2em;
      }

      .contact {
        font-weight: lighter;
        padding-left: 20px;
        font-size: 1.5em;
      }

      `}</style>
      <div id="parent">
        <img id="pint" width="100%" height="auto" src={pint} alt="pint of beer" />
        <div className="flex-container">
          <div id="contact">
            <h2 className="contactTitle">Phone: </h2>
            <h3 className="contact">(999)881-beer</h3>
            <h2 className="contactTitle">Hours: </h2>
            <h3 className="contact">Thursday - Sunday: 11am - 2am<br />
              Monday - Wednesday: 4pm - 11pm</h3>
            <h2 className="contactTitle">Email: </h2>
            <h3 className="contact">info@highlandertaphouse.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;