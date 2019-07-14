import React from 'react';
import Keg from './Keg';
import wood from '../assets/img/wood.jpg';
import PropTypes from 'prop-types';

function TapList(props) {
  console.log(props);
  return (
    <div>
      <style jsx>{`
        #woodbackground {
          background-image: url(${wood});
          background-size: cover;
          background-repeat: repeat;
        } 

        #top-spacer {
          height: 20px;
        }

        #spacer {
          padding-top: 70px;
        }
        `}
      </style>
      <div id="woodbackground">
        <div id="top-spacer"></div>
        {props.newTapList.map((keg) =>
          <Keg name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            abv={keg.abv}
            about={keg.about}
            key={keg.id} />
        )}
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;