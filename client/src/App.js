import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar';
import dashboard from './components/dashboard/dashboard';
import feed from './components/feed/feed'; // likely will change
import profile from './components/profile/profile';
import create from './components/create/create';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/dashboard' exact component={dashboard}/>
      <Route path='/' exact component={feed}/>
      <Route path='/profile' exact component={profile}/>
      <Route path='/create' exact component={create}/>
    </Router>
  );
}

export default App;
