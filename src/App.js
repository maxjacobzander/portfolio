import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Home from './containers/Home';
import Projects from './components/Projects';
// import './App.css';
import './style.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
