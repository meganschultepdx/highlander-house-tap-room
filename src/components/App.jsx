import React from 'react';
import Navbar from './Navbar';
import TapList from './TapList';
import EmployeeLogin from './EmployeeLogin';
import AddEditKeg from './AddEditKeg';
import About from './About';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          background-color: black;
          margin: 0;
        }
      `}
      </style>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={TapList} />
        <Route path='/employeeLogin' component={EmployeeLogin} />
        <Route path='/addEditKeg' component={AddEditKeg} />
        <Route path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;