import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
             <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;