import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';

function EmployeeTapList(props){
  console.log(props);
  return (

    <div>
      <style jsx>{`

    #background {
      background-color: black
    } 
    `}
      </style>
      <h2 style={{color: 'white'}}>Employee Tap List</h2>
      <p style={{color: 'white'}}>Check the box next to each beer when you sell a pint to track keg fullness!</p>
      <TapList childTapList={props.tapList} />
    </div>
  );
}

EmployeeTapList.propTypes = {
  childTapList: PropTypes.array,
  tapList: PropTypes.array
};

export default EmployeeTapList;