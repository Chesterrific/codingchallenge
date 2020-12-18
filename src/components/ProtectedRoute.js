import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// Pages
import Welcome from '../pages/Welcome.js';

export default function AppWrapper({ login, setLogin, username, setUsername }) {

  if (!login) {
    console.log('redirecting to login');
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div>
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
