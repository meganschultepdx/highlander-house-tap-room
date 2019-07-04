import React from 'react';
import Navbar from './Navbar';
import TapList from './TapList';
import EmployeeLoginForm from './EmployeeLoginForm';
import AddEditKeg from './AddEditKeg';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={TapList} />
        <Route path='/employeeLogin' component={EmployeeLoginForm} />
        <Route path='/AddEditKeg' component={AddEditKeg} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;