import React, {Component} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import CreatePost from '../pages/CreatePost';
import NewsPage from '../pages/NewsPage';

class Main extends Component{
  render() {
    let isLoggedIn = true;
    return (
      <Switch>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/news/news-page">
          <NewsPage isLoggedIn={isLoggedIn}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default Main;
