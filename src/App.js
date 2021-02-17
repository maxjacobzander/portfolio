import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/Resume';
// import './App.css';
import './style.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
