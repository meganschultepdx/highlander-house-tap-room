import React from 'react';
import Navbar from './Navbar';
import TapList from './TapList';
import EmployeeLogin from './EmployeeLogin';
import AddEditKeg from './AddEditKeg';
import About from './About';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={TapList} />
        <Route path='/employeeLogin' component={EmployeeLogin} />
        <Route path='/addEditKeg' component={AddEditKeg} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;