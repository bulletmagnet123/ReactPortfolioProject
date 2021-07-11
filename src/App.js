import React, { Component } from 'react';
//import logo from './logo.svg';
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'

import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavBar'
import { Jumbotron } from './components/Jumbotron'
import SideNav from './components/SideNav';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { gameconfig } from './GameConfig'

class App extends Component {
  
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <SideNav />
        <Jumbotron />
        <Layout>
          <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
                </Switch>
              <IonPhaser game={gameconfig} />
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}
export default App;
