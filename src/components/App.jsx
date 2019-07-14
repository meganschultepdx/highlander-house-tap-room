import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import EmployeeLoginControl from './EmployeeLoginControl';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import EmployeeTapList from './EmployeeTapList';
import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [
        {
          name: 'Lambert Lager',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '5',
          abv: '5',
          about: 'this Lager is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '1'
        },
        {
          name: 'MacLeaod Märzen',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '5',
          abv: '5.5',
          about: 'This Marzen is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '2'
        },
        {
          name: 'Immortal IPA',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '6',
          abv: '6',
          about: 'this IPA is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '3'
        },
        {
          name: 'Stab to the Heart Stout',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '6',
          abv: '4.8',
          about: 'this stout is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '4'
        },
        {
          name: 'Ramirez Red',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '5',
          abv: '5',
          about: 'this Red Ale is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '5'
        },
        {
          name: 'Kurgan Kölsch',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '5',
          abv: '4.5',
          about: 'This Kolsch is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '6'
        },
        {
          name: 'Quickening Quince Sour',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '5',
          abv: '5.5',
          about: 'this sour ale is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '7'
        },
        {
          name: 'Princes of the Universe Porter',
          brewery: 'Highlander Taigh-grùdaidh',
          price: '6',
          abv: '5',
          about: '“This Porter is Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          id: '8'
        }
      ]
    };
    this.handleAddingNewKegToTapList = this.handleAddingNewKegToTapList.bind(this);
  }

  handleAddingNewKegToTapList(newKeg) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newKeg);
    this.setState({ masterTapList: newMasterTapList });
  }

  render() {
    return (
      <div>
        <style jsx global>{`
        body {
          background-color: black;
          margin: 0;
        }
      `}
        </style>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home tapList={this.state.masterTapList} />} />
          <Route path='/employeeLogin' render={() => <EmployeeLoginControl onNewKegCreation={this.handleAddingNewKegToTapList}
            tapList={this.state.masterTapList}
          />} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/employeeTapList' render={() => <EmployeeTapList tapList={this.state.masterTapList} />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;