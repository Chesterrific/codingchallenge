import React from 'react'

export default function Navigation({ setLogin, username }) {

  // Sets login state to false.
  const submitLogOut = () => {
    localStorage.setItem('loginStatus', 'false');
    setLogin(false);
  }

  return (
    <nav className='nav centered'>
      <h1>Welcome {username}</h1>
      <button onClick={submitLogOut}>Log Out</button>
    </nav>
  )
}