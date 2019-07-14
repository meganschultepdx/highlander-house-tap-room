import React from 'react';
import wood from '../assets/img/wood.jpg';
import AddKegForm from './AddKegForm';
import PropTypes from 'prop-types';
import TapList from './TapList';


function EmployeePage(props) {
  return (
    <div id="employeeBackground">
      <style jsx>{`
        

        .flex-container {
          display: flex;
          flex-direction: column;
        }

        #employeePageTitle {
          font-family: sans-serif;
          text-align: center;
          color: grey;
          padding-top: 60px;
          font-weight: lighter;
          border: 1px solid rgb(0, 0, 0, 0);
          background-color: rgb(0, 0, 0, .6);
          text-transform: uppercase;
        }

        #tapListTitle {
          text-align: center;
          font-weight: lighter;
          font-family: sans-serif;
          color: black;
          background-color: grey;
        }
      

        `}</style>
      <div className="flex-container">
        <h1 id="employeePageTitle">Employee Page</h1>
        <div id="tapListTitle">
          <h2 style={{ fontWeight: 'lighter', textTransform: 'uppercase' }}>Employee Tap List</h2>
          <p style={{ fontWeight: 'lighter' }}>Check the box next to each beer when you sell a pint to track keg fullness!</p>
        </div>
        <div id="employeeTapList">
          <TapList childTapList={props.employeeTapList} />
        </div>
        <div id="addKegForm">
          <AddKegForm onNewKegCreation={props.onNewKegCreation} />
        </div>
      </div>
    </div>
  );
}

EmployeePage.propTypes = {
  onNewKegCreation: PropTypes.func,
  employeeTapList: PropTypes.array,
  childTapList: PropTypes.array
};

export default EmployeePage;