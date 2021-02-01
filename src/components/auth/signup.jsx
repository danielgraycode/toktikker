import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import MessagePopup from '../messagepopup'

const Signup = () => {
  // User State
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    password: '',
    error: '',
    verifyEmail: false,
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

  // Submit function (Create account)
  const handleSubmit = e => {
    e.preventDefault();
    // Sign up code here.
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(result => {
        // Update the nickname
        result.user.updateProfile({
          displayName: user.nickname,
        });

        // URL of my website.
        const myURL = { url: 'http://localhost:3000/' }

        // Send Email Verification and redirect to my website.
        result.user.sendEmailVerification(myURL)
          .then(() => {
            setUser({
              ...user,
              verifyEmail: true
            })
          })
          .catch(error => {
            setUser({
              ...user,
              error: error.message,
            })
          })

        // Sign Out the user.
        firebase.auth().signOut();
      }).catch(error => {
        // Update the error
        setUser({
          ...user,
          error: error.message,
        })
      })
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input required class="form-control" type="text" placeholder="Username" name="nickname" onChange={handleChange}/><br />
        <input required class="form-control" type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
        <input required class="form-control" type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button class="btn btn-success" type="submit">Sign Up</button>
      </form>
      {user.error && <MessagePopup message={user.error} messageSender="TokTikker"/>}
      {user.verifyEmail && <MessagePopup message="Account created. Verify your email to continue" messageSender="TokTikker"/>}
    </>
  )
};
export default Signup;