import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Feed from './components/home/home'; // likely will change
import Profile from './components/profile/profile';
import Create from './components/create/create';
import Settings from './components/settings/settings';
import Read from './components/publication/read';
import UserContext from './contexts/userContext';
import Notifications from './components/layout/notifications';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    }
  }


  render() {
    return(
      <Router>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <main>
          <UserContext>

            <Switch>
              <Route path='/dashboard' exact>
                <Dashboard />
              </Route>
              <Route path='/' exact>
                <Feed />
              </Route>
              <Route path='/profile' exact>
                <Profile />
              </Route>
              <Route path='/create' exact>
                <Create />
              </Route>
              <Route path='/settings' exact>
                <Settings />
              </Route>
              <Route path='/read'>
                <Read />
              </Route>
            </Switch>

          </UserContext>
        </main>
      </Router>
    )
  }
}

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//       fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/dashboard",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>

// class Login extends Component {
//   render() {
//     return (
//       <div>
//         LOGIN
//       </div>
//     )
//   }
// }

export default App;
