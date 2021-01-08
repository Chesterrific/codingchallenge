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
    try {
      if (localStorage.getItem('data') === null || isEmpty(JSON.parse(localStorage.getItem('data')))) {
        setLocalData();
      }
    } catch (e) {
      alert(e + '\n\n Resetting data.');
      console.error(e);
      setLocalData();
    }

    setData(JSON.parse(localStorage.getItem('data')));
    setCurrency(CurrencyFile);
    setLoaded(true);
  }, [])

  // Adding unique IDs to each entry
  useEffect(() => {
    if (!loaded) {
      return
    }

    const addIDs = data.map((person) => {
      const updatedPerson = {
        ...person,
        id: person.first_name + person.last_name + person.age + Math.random() * 1000,
      }
      return updatedPerson;
    });

    setData(addIDs);
  }, [loaded])

  // If data has been updated, update local storage copy.
  useEffect(() => {
    if (!loaded) {
      return
    }

    localStorage.setItem('data', JSON.stringify(data));

  }, [data])

  // Redirect to login page if login state is false.
  if (!login) {
    console.log('redirecting to login');
    return (
      <Redirect to='/login' />
    )
  }

  // Simple function that checks if an object is empty.
  const isEmpty = (obj) => {
    for (var i in obj) {
      if (obj.hasOwnProperty(i))
        return false
    }
    return true;
  }

  const setLocalData = () => {
    localStorage.setItem('data', JSON.stringify(DataFile));
    console.log('data set to local');
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
            setData={setData}
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