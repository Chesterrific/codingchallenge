import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// Pages
import Welcome from '../pages/Welcome.js';

// Components
import Navigation from '../components/Navigation.js';

export default function AppWrapper({ login, setLogin, username, setUsername }) {

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
      <Route path='/welcome' exact>
        <Welcome
          setLogin={setLogin}
          username={username}
          setUsername={setUsername}
        />
      </Route>
    </div>
  )
}