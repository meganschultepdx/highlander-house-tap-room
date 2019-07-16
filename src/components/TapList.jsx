import React from 'react';
import Keg from './Keg';
import wood from '../assets/img/wood.jpg';
import PropTypes from 'prop-types';

function TapList(props) {
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

        #tapListFormat {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin: 20px 40px 30px 40px;
        }
        `}
      </style>
      <div id="woodbackground">
        <div id="top-spacer"></div>
        <div id="tapListFormat">
          {props.childTapList.map((keg, index) =>
            <Keg name={keg.name}
              brewery={keg.brewery}
              price={keg.price}
              abv={keg.abv}
              about={keg.about}
              currentRouterPath={props.grandchildCurrentRouterPath}
              key={keg.id}
              onSellingPint={props.onSellingPint}
              pintsLeft={keg.pintsLeft}
              index={index} />
          )}
        </div>
      </div>
    </div>
  );
}

TapList.propTypes = {
  childTapList: PropTypes.array,
  grandchildCurrentRouterPath: PropTypes.string,
  onSellingPint: PropTypes.func
};

export default TapList;