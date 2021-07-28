import React, { Component } from 'react';
//import logo from './logo.svg';
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import Home from './components/HomeComponent'
import About from './components/AboutComponent'
import Contact from './components/ContactComponent'
import { NoMatch } from './NoMatch'
import { NavigationBar } from './components/NavBar'
import { Jumbotron } from './components/Jumbotron'
import SideNav from './components/SideNav';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { gameconfig } from './GameConfig'
import GameComponent from './components/GameComponent.js'

class App extends Component {
  
  render(){
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
                  <Route component={NoMatch} />
                </Switch>
          </Router>
      </React.Fragment>
    )
  }
}
export default App;
