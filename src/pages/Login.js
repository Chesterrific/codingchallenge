import React from 'react';
import { Redirect } from 'react-router-dom';

// Components
import Form from '../components/Form';

export default function Login({ login, setLogin, setUsername }) {

  if (login) {
    return (
      <Redirect to='/' />
    )
  }

  return (
    <div>
      <Form
        login={login}
        setLogin={setLogin}
        setUsername={setUsername}
      />
    </div>
  )
}