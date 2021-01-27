import React, {useState} from 'react'
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import MessagePopup from './messagepopup';


export const ForgotPasswordAtLogin = () => {
    const firebase = useFirebaseApp();
    const [state, updateState] = useState({
        email: '',
        message: ""
      });

    const SendResetEmail = e => {
        e.preventDefault()
        firebase.auth().sendPasswordResetEmail(state.email).then(result => {
            updateState({message: "Success! Check your email to reset the password."})
        }).catch(error => {
            updateState({message: error.message})
        })
    }

    const updateEmail = e => {
        updateState({email: e.target.value})
    }

    return( 
        <>
        <h1>Reset Password:</h1>
        {state.message && <MessagePopup message={state.message}  messageSender={"TokTikker"} />}
        <form onSubmit={SendResetEmail}>
            <input class="form-input" type="email" placeholder="Email" name="email" onChange={updateEmail}/><br />
            <button class="btn btn-primary" type="submit">Reset Password</button>
        </form>
        </>
    )
}

export default ForgotPasswordAtLogin