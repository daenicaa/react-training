import React, {Component} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Topics from '../pages/Topics';

class Main extends Component{
  render() {
    return (
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default Main;
