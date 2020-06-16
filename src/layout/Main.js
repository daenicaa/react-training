import React, {Component} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import CreatePost from '../pages/CreatePost';
import NewsPage from '../pages/NewsPage';

class Main extends Component{
  render() {
    return (
      <Switch>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/news/news-page">
          <NewsPage isLoggedIn={this.props.isLoggedIn}/>
        </Route>
        <Route path="/">
          <Home isLoggedIn={this.props.isLoggedIn}/>
        </Route>
      </Switch>
    );
  }
}

export default Main;
