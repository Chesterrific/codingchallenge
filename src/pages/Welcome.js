import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Welcome(props) {

  let history = useHistory();

  const submitLogOut = () => {
    localStorage.setItem('loginStatus', 'false');
    props.setLogin(false);
    props.setUsername('');
    history.push('/');
  }

  return (
    <div>
      <h1>Welcome {props.username}</h1>
      <button onClick={submitLogOut}>Log Out</button>
    </div>
  )
}
