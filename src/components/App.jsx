import React from 'react';
import Navbar from './Navbar';
import TapList from './TapList';
import EmployeeLoginControl from './EmployeeLoginControl';
import EmployeePage from './EmployeePage';
import About from './About';
import Contact from './Contact';
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
        <Route path='/employeeLogin' component={EmployeeLoginControl} />
        <Route path='/employeePage' component={EmployeePage} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;