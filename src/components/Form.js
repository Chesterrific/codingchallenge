import React from 'react';
// import { useHistory } from 'react-router-dom';

export default function Form(props) {

  let localUser = '';
  // let history = useHistory();

  const submitLogin = (e) => {
    // Prevent page from reloading on button press
    // e.preventDefault();

    // Check if username is blank
    if (localUser === '') {
      alert("Username cannot be empty!");
    } else {
      localStorage.setItem('loginStatus', 'true');
      localStorage.setItem('username', localUser);
      props.setUsername(localUser);
      props.setLogin(true);
      // history.push('/welcome');
    }
  }

  const submitLogOut = () => {
    localStorage.setItem('loginStatus', 'false');
    props.setLogin(false);
    props.setUsername('');
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
      <button onClick={submitLogin} type='submit' className={`${props.login ? "hidden" : ""}`}>Log In</button>
      <button onClick={submitLogOut} type='submit' className={`${props.login ? "" : "hidden"}`}>Log Out</button>
    </div>
  )
}
