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
import { render } from '@testing-library/react';
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavBar'
import { Jumbotron } from './components/Jumbotron'
import SideNav from './components/SideNav';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Scene0 } from './Scene0'

let config = {
  width: 1920,
  height: 1080,
  backgroundColor: '#FFFFF',
  autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
  type: Phaser.AUTO,
  scene: [Scene0],
  parent: 'index',
  physics: {
      default: `arcade`,
      arcade: {
        gravity: { y: 200 },
        debug: true
      }
  },
  platforms: true,
  groundPlat: true,
  player: true,
  cursors: true
}
let player;
let platforms;
let groundPlat;
let game = new Phaser.Game(config);
let cursors;
const speed = 200;
const speedDiag = speed * (1/1.44);


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <SideNav />
        <Jumbotron />
        <Layout>
          <Router>
            <TransitionGroup>
              <CSSTransition classNames="fade" timeout={300}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Router>
        </Layout>
      </React.Fragment>
      
    )
  }
}
export default App;
