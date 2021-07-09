import React, { Component } from 'react';
//import logo from './logo.svg';
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
