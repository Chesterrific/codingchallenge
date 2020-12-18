import React from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function Navigation({ setLogin, username }) {

  let history = useHistory();

  const submitLogOut = () => {
    localStorage.setItem('loginStatus', 'false');
    setLogin(false);
    history.push('/');
  }

  return (
    <nav className='welcome'>
      <h1>Welcome {username}</h1>
      <button onClick={submitLogOut}>Log Out</button>
    </nav>
  )
}