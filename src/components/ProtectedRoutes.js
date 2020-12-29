import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// Pages
import Welcome from '../pages/Welcome.js';
import UserDetail from '../pages/UserDetail.js';

// Components
import Navigation from '../components/Navigation.js';

export default function ProtectedRoutes({ login, setLogin, username, path }) {

  // Redirect to login page if login state is false.
  if (!login) {
    console.log('redirecting to login');
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div>
      <Navigation
        setLogin={setLogin}
        username={username}
      />
      {/* Protected routes go here. */}
      <Switch>
        <Route path={path + 'userdetails/:fname/:lname/:age'} exact>
          <UserDetail />
        </Route>
        <Route path={[path, '*']} exact>
          <Welcome />
        </Route>
      </Switch>
    </div>
  )
}