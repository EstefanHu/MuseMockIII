import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
  } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Feed from './components/feed/feed'; // likely will change
import Profile from './components/profile/profile';
import Create from './components/create/create';
import Settings from './components/settings/settings';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }
  
  render() {
    return(
      <Router>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <main>
          <Switch>
            <Route path='/dashboard' exact>
              <Dashboard />
            </Route>
            <PrivateRoute path='/' exact>
              <Feed />
            </PrivateRoute>
            <PrivateRoute path='/profile' exact>
              <Profile />
            </PrivateRoute>
            <PrivateRoute path='/create' exact>
              <Create />
            </PrivateRoute>
            <PrivateRoute path='settings' exact>
              <Settings />
            </PrivateRoute>
          </Switch>
        </main>
      </Router>
    )
  }
}

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    auth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    auth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return auth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
