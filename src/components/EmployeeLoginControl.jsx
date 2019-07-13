import React from 'react';

class EmployeeLoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeePageVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({employeePageVisible: true});
    console.log('employeePageVisible is currently set to:' + this.state.employeePageVisible);
  }

  render(){
    return (
      <div>
        <p style={{color: 'white', paddingTop: '100px'}}>This is the EmployeeLoginControl component!</p>
        <strong style={{color: 'white', paddingTop: '100px'}} onClick={this.handleClick}> Click me to change my state!</strong>
      </div>
    );
  }
}

export default EmployeeLoginControl;