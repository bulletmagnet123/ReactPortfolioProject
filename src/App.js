import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import Home from './components/HomeComponent'
import About from './components/About'
import Contact from './components/Contact'
import { NoMatch } from './NoMatch'
import { NavigationBar } from './components/NavBar'
import { Jumbotron } from './components/Jumbotron'
import GameComponent from './components/GameComponent.js'
import SideNav from './components/SideNav';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/GameComponent" component={GameComponent} />
            <Route path="/" component={SideNav} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App;
