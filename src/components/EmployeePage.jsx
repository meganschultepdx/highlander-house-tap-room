import React from 'react';
import wood from '../assets/img/wood.jpg';
import AddKegForm from './AddKegForm';
import PropTypes from 'prop-types';
import TapList from './TapList';


function EmployeePage(props) {
  return (
    <div id="employeeBackground">
      <style jsx>{`
        #employeeBackground {
          background-image: url(${wood});
          background-size: cover;
          background-repeat: repeat;
        } 

        .flex-container {
          display: flex;
          justify-content: center;
        }

        #employeePageTitle {
          font-family: sans-serif;
          text-align: center;
          color: grey;
          padding: 80px 200px 100% 200px;
          font-weight: lighter;
          border: 1px solid rgb(0, 0, 0, 0);
          background-color: rgb(0, 0, 0, .6);
          text-transform: uppercase;
        }

        `}</style>
      <div className="flex-container">
        <h1 id="employeePageTitle">Employee Page</h1>
        <TapList childTapList={props.employeeTapList} />
        <AddKegForm onNewKegCreation={props.onNewKegCreation}/>
      </div>
    </div>
  );
}

EmployeePage.propTypes= {
  onNewKegCreation: PropTypes.func,
  employeeTapList: PropTypes.array,
  childTapList: PropTypes.array
};

export default EmployeePage;