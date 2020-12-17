import React from 'react';

// Components
import Form from '../components/Form';

export default function Login(props) {

  return (
    <div>
      <div className={`${JSON.parse(localStorage.getItem('loginStatus')) ? '' : 'hidden'}`}>Welcome {props.username}!</div>
      <Form
        login={props.login}
        setLogin={props.setLogin}
        username={props.username}
        setUsername={props.setUsername}
      />
    </div>
  )
}
