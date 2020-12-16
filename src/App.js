import React, { useState, useEffect } from 'react';
import './App.css';
// Components
import Form from './components/Form.js';

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
    <div className="App">
      <div className={`${JSON.parse(localStorage.getItem('loginStatus')) ? '' : 'hidden'}`}>Welcome {username}!</div>
      <Form
        login={login}
        setLogin={setLogin}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
}

export default App;