import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Components
import AllRoutes from './components/AllRoutes';

function App() {

  // States
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Effects
  useEffect(() => {
    checkLogin();
    setLoaded(true);
  }, [])

  // Functions
  const checkLogin = () => {
    // If "loginStatus" is not found in local storage.
    if (localStorage.getItem('loginStatus') === null) {
      localStorage.setItem('loginStatus', 'false');
      localStorage.setItem('username', username);
      console.log('loginStatus was null.');
      console.log('Creating entry in local storage now.');
    }
    // If "loginStatus" is found as false.
    else if (JSON.parse(localStorage.getItem('loginStatus')) === false) {
      console.log('loginStatus was false.');
    }
    // If "loginStatus" is found as true.
    else {
      setLogin(JSON.parse(localStorage.getItem('loginStatus')));
      setUsername(localStorage.getItem('username'));
      console.log('Already logged in.');
    }
  }

  // Prevent any rendering until data from local storage has been retrieved.
  if (!loaded) {
    return null;
  }

  return (
    <Router>
      <div className="App">
        <AllRoutes
          login={login}
          setLogin={setLogin}
          username={username}
          setUsername={setUsername}
        />
      </div>
    </Router>
  );
}

export default App;