import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// Pages
import Welcome from '../pages/Welcome.js';

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
      <Route path={path} exact>
        <Welcome
        />
      </Route>
    </div>
  )
}