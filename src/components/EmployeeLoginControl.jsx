import React from 'react';

class EmployeeLoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeePageVisible: false
    };
    this.handleEmployeeLoginSubmit = this.handleEmployeeLoginSubmit.bind(this);
  }

  handleEmployeeLoginSubmit() {
    this.setState({employeePageVisible: true});
  }

  render(){
    let pageDisplay = null;
    if (this.state.employeePageVisible){
      pageDisplay = <EmployeePage />;
    } else {
      pageDisplay = <EmployeeLogin onEmployeeLoginSubmit={this.handleEmployeeLoginSubmit}/>;
    }
    return (
      <div>
        {pageDisplay}
      </div>
    );
  }
}

export default EmployeeLoginControl;