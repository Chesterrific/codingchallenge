import React from 'react';

export default function Form({ login, setLogin, username, setUsername }) {

  let localUser = '';

  const submitLogin = (e) => {
    // Prevent page from reloadign on button press
    e.preventDefault();

    // Check if username is blank
    if (localUser !== '') {
      localStorage.setItem('loginStatus', 'true');
      localStorage.setItem('username', localUser);
      setUsername(localUser);
      setLogin(true);
      alert('Welcome ' + localUser + '!');
    } else {
      alert("Username cannot be empty!");
    }
  }

  const submitLogOut = () => {
    localStorage.setItem('loginStatus', 'false');
    setLogin(false);
  }

  // Set username
  const usernameHandler = (e) => {
    localUser = e.target.value;
  }

  return (
    <form className="login">
      <label htmlFor="username">Username:</label>
      <input onChange={usernameHandler} type="text" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button onClick={submitLogin} type='submit' className={`${login ? "hidden" : ""}`}>Log In</button>
      <button onClick={submitLogOut} type='submit' className={`${login ? "" : "hidden"}`}>Log Out</button>
    </form>
  )
}
