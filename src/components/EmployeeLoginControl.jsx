import React from 'react';

class EmployeeLoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeePageVisible: false
    };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState({employeePageVisible: true});
  //   console.log('employeePageVisible is currently set to:' + this.state.employeePageVisible);
  // }

  render(){
    let pageDisplay = null;
    if (this.state.employeePageVisible){
      pageDisplay = <EmployeePage />;
    } else {
      pageDisplay = <EmployeeLogin />
    }
    return (
      <div>
        <EmployeeLogin />
      </div>
    );
  }
}

export default EmployeeLoginControl;