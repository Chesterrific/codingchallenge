import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DataFile from '../data/fe_challenge_sample_data.json';
import CurrencyFile from '../data/currency_symbols.json';

// Pages
import Welcome from '../pages/Welcome.js';
import UserDetail from '../pages/UserDetail.js';

// Components
import Navigation from '../components/Navigation.js';

export default function ProtectedRoutes({ login, setLogin, username, path }) {

  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Don't load data if not logged in.
    if (!login) {
      return null;
    }
    setData(DataFile);
    setCurrency(CurrencyFile);
    setLoaded(true);
  }, [])

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
          <UserDetail
            data={data}
            currency={currency}
            loaded={loaded}
          />
        </Route>
        <Route path={[path, '*']} exact>
          <Welcome
            data={data}
            currency={currency}
            loaded={loaded}
          />
        </Route>
      </Switch>
    </div>
  )
}