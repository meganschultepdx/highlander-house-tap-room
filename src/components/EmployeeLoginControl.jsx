import React from 'react';
import EmployeeLogin from './EmployeeLogin';
import EmployeePage from './EmployeePage';
import PropTypes from 'prop-types';

class EmployeeLoginControl extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      employeePageVisible: false
    };
    this.handleEmployeeLoginSubmit = this.handleEmployeeLoginSubmit.bind(this);
  }

  handleEmployeeLoginSubmit() {
    this.setState({ employeePageVisible: true });
  }

  render() {
    let pageDisplay = null;
    if (this.state.employeePageVisible) {
      pageDisplay = <EmployeePage onNewKegCreation={this.props.onNewKegCreation}
        employeeTapList={this.props.tapList}
      />;
    } else {
      pageDisplay = <EmployeeLogin onEmployeeLoginSubmit={this.handleEmployeeLoginSubmit} />;
    }
    return (
      <div>
        {pageDisplay}
      </div>
    );
  }
}

EmployeeLoginControl.propTypes = {
  onNewKegCreation: PropTypes.func,
  employeeTapList: PropTypes.array,
  tapList: PropTypes.array
};

export default EmployeeLoginControl;