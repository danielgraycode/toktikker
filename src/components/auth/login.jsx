import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import MessagePopup from '../messagepopup';
import ForgotPasswordAtLogin from '../accountFunctions'

const Login = () => {
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
        } else {
          <MessagePopup messageSender={"TokTikker"} message={"Logged in!"}/>
        }
      })
      .catch(error => {
        // Update the error
        setUser({
          ...user,
          error: error.message,
        })
      })
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input class="form-input" type="email" placeholder="Email" name="email" onChange={handleChange}/><br />
        <input class="form-input" type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button class="btn btn-primary" type="submit">Log in</button>
      </form>
      <button class="btn btn-danger" >Forgot Password</button>
      {user.error && <MessagePopup messageSender={"TokTikker"} message={user.error}/>}
      <ForgotPasswordAtLogin/>
    </>
  )
};

export default Login;
