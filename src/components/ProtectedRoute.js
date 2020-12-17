import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute(props) {

  return (
    <Route
      {...props}
      render={props => (
        props.login ?
          <props.component {...props} /> :
          <Redirect to='/' />
      )} />
  )
}
