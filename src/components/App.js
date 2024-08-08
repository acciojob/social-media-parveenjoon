

import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UsersPage from './components/UsersPage';
import NotificationsPage from './components/NotificationsPage';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/notifications" component={NotificationsPage} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/edit-post/:id" component={EditPost} />
      </Switch>
    </Router>
  );
}

export default App;
