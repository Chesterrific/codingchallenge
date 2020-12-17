import React from 'react'

export default function Welcome(props) {

  const submitLogOut = () => {
    localStorage.setItem('loginStatus', 'false');
    props.setLogin(false);
    props.setUsername('');
  }

  return (
    <div>
      <h1>Welcome {props.username}</h1>
      <button onClick={submitLogOut}>Log Out</button>
    </div>
  )
}
