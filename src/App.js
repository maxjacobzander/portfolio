import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Resume from './components/Resume';
// import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
