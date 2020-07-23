import React, {Component} from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from '../pages/Home';
import CreatePost from '../pages/CreatePost';
import NewsPage from '../pages/NewsPage';

class Main extends Component{
  render() {
    //let match = useRouteMatch();
    return (
      <Switch>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/news/:title" component={() => <NewsPage isLoggedIn={this.props.isLoggedIn}/>}></Route>
        
        <Route path="/">
          <Home isLoggedIn={this.props.isLoggedIn}/>
        </Route>
      </Switch>
    );
  }
}

export default Main;
