//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { render } from '@testing-library/react';
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavBar'
import { Jumbotron } from './components/Jumbotron'


function App() {
  render(); {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Jumbotron/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
