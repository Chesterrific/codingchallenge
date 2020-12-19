import React from 'react';

// Components
import Form from '../components/Form';

export default function Login({ login, setLogin, setUsername }) {

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