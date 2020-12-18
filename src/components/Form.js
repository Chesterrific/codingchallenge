import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Form({ login, setLogin, setUsername }) {

  let localUser = '';
  let history = useHistory();

  const submitLogin = (e) => {
    // Prevent page from reloading on button press
    e.preventDefault();

    // Check if username is blank
    if (localUser === '') {
      alert("Username cannot be empty!");
    } else {
      localStorage.setItem('loginStatus', 'true');
      localStorage.setItem('username', localUser);
      setUsername(localUser);
      setLogin(true);
      history.push('/welcome');
    }
  }

  const submitLogOut = () => {
    localStorage.setItem('loginStatus', 'false');
    setLogin(false);
    setUsername('');
    document.getElementById('username').value = '';
  }

  // Set username
  const usernameHandler = (e) => {
    localUser = e.target.value;
  }

  return (
    <div className="login">
      <label>Username:</label>
      <input onChange={usernameHandler} type="text" name="username" id='username' />
      <label>Password:</label>
      <input type="password" name="password" />
      <button onClick={submitLogin} type='submit' className={`${login ? "hidden" : ""}`}>Log In</button>
      <button onClick={submitLogOut} type='submit' className={`${login ? "" : "hidden"}`}>Log Out</button>
    </div>
  )
}