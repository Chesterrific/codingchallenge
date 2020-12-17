import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Login from './pages/Login';
import Welcome from './pages/Welcome';

// Components
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  // States
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');

  // Effects
  useEffect(() => {
    checkLogin();
  }, [])

  useEffect(() => {
    console.log("State Login Status: " + login);
  }, [login])

  // Functions
  const checkLogin = () => {
    // If "loginStatus" is not found in local storage
    if (localStorage.getItem('loginStatus') === null) {
      localStorage.setItem('loginStatus', 'false');
      localStorage.setItem('username', username);
      console.log('Not logged in');
    }
    // If "loginStatus" is found as false
    else if (JSON.parse(localStorage.getItem('loginStatus')) === false) {
      console.log('Not logged in');
    }
    // If "loginStatus" is found as true
    else {
      setLogin(JSON.parse(localStorage.getItem('loginStatus')));
      setUsername(localStorage.getItem('username'));
      console.log('Already logged in');
    }
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path='/'
            render={props => (
              login ?
                <Welcome
                  {...props}
                  setLogin={setLogin}
                  username={username}
                  setUsername={setUsername} /> :
                <Login
                  {...props}
                  login={login}
                  setLogin={setLogin}
                  username={username}
                  setUsername={setUsername}
                />
            )}
          />
          {/* <Route
            path='/'
            render={props => (
              <Login
                {...props}
                login={login}
                setLogin={setLogin}
                username={username}
                setUsername={setUsername}
              />
            )}
          /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;