import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Login from '../pages/Login.js';

// Components
import ProtectedRoute from './ProtectedRoute.js';

export default function AllRoutes({ login, setLogin, username, setUsername }) {
  return (
    <Switch>
      <Route path='/login' exact>
        <Login
          login={login}
          setLogin={setLogin}
          username={username}
          setUsername={setUsername}
        />
      </Route>
      <Route path='/'>
        <ProtectedRoute
          login={login}
          setLogin={setLogin}
          username={username}
          setUsername={setUsername}
        />
      </Route>
    </Switch>
  )
}
