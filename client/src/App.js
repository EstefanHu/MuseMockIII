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
      isLoggedIn: false,
      posts: [],
    }
  }

  componentDidMount() {
    fetch('https://localhost:4000')
      .then(checkStatus)
      .then(res => res.json())
      .then(processPosts)
      .catch(handleError);
  }

  checkStatus(response) {
    if (!response.ok) { // response.status >= 200 && response.status < 300
      throw Error("Error in request: " + response.statusText);
    }
    return response;
  }

  processPosts(response) {
    let headerPosts = [];
    for (let i = 0; i < response.length; i++) {
      headerPosts.push(response[i]);
    }
    this.setState({
      posts: headerPosts
    });
  }

  handleError(error) {
    console.log('Error: ' + error);
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
            <PrivateRoute path='/settings' exact>
              <Settings />
            </PrivateRoute>
          </Switch>
        </main>
      </Router>
    )
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
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
      fakeAuth.isAuthenticated ? (
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

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends Component {
  render() {
    return (
      <div>
        LOGIN
      </div>
    )
  }
}

export default App;
