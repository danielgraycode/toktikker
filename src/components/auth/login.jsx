import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import {useToastContext, ADD} from '../messagepopup';

const Login = () => {
  const {toastDispatch} = useToastContext();

  // User State
  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
  });

  // onChange function
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
  };

  // Import firebase
  const firebase = useFirebaseApp();

  // Submit function (Log in user)
  const handleSubmit = e => {
    e.preventDefault();
    // Log in code here.
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        if (!result.user.emailVerified) {
          setUser({
            ...user,
            error: 'Please verify your email to continue.',
          })
          firebase.auth().signOut();
          toastDispatch({type: ADD, payload: {messageSender: "TokTikker", message: "Please verify your email to continue"}})
        }
      })
      .catch(error => {
        // Update the error
        setUser({
          ...user,
          error: error.message,
        })
        toastDispatch({type: ADD, payload: {messageSender: "TokTikker", message: error.message}})
      })

  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input required class="form-control" type="email" placeholder="Email" name="email" onChange={handleChange}/><br />
        <input requied class="form-control" type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button class="btn btn-success" type="submit">Log in</button>
      </form>
    </>
  )
};

export default Login;
