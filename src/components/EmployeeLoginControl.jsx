import React from 'react';

class EmployeeLoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeePageVisible: false
    }
  }

  render(){
    return (
      <div>
        <p>This is the EmployeeLoginControl component!</p>
      </div>
    );
  }
}

export default EmployeeLoginControl;