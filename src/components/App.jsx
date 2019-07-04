import React from 'react';
import Navbar from './Navbar';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={TapList} />
      </Switch>
    </div>
  );
}

export default App;