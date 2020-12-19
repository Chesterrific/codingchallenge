import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Login from '../pages/Login.js';

// Components
import ProtectedRoutes from './ProtectedRoutes.js';

export default function AllRoutes({ login, setLogin, username, setUsername }) {
  return (
    <Switch>
      <Route path='/login' exact>
        <Login
          login={login}
          setLogin={setLogin}
          setUsername={setUsername}
        />
      </Route>
      <ProtectedRoutes
        path='/'
        login={login}
        setLogin={setLogin}
        username={username}
      />
    </Switch>
  )
}