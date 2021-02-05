import React, {useState} from 'react'
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth'
import {useToastContext, ADD} from './messagepopup'


export const AccountManagementPage = () => {
    const firebase = useFirebaseApp();
    const user = useUser();
    const [state, updateState] = useState({
        email: user.data.email,
      });

    return (
        <>
        <h1>Manage your Account:</h1>
        <button class="btn btn-primary" onClick={this.changePassword}>Reset Password</button>
        </>
    )
}
export default AccountManagementPage

export const ForgotPasswordAtLogin = () => {
    const firebase = useFirebaseApp();
    const {toastDispatch} = useToastContext();
    const [state, updateState] = useState({
        email: '',
      });

    const SendResetEmail = e => {
        e.preventDefault()
        firebase.auth().sendPasswordResetEmail(state.email).then(result => {
            toastDispatch({type: ADD, payload:{message: "Success! Check your email to reset the password.", messageSender: "TokTikker"}})
        }).catch(error => {
            toastDispatch({type: ADD, payload:{message: error.message, messageSender: "TokTikker"}})
        })
    }

    const updateEmail = e => {
        updateState({email: e.target.value})
    }

    return( 
        <>
        <h1>Reset Password:</h1>
        <form onSubmit={SendResetEmail}>
            <input class="form-input" type="email" placeholder="Email" name="email" onChange={updateEmail}/><br />
            <button class="btn btn-danger" type="submit">Reset Password</button>
        </form>
        </>
    )
}

const changePassword = () => [
    //SHOW POPUP TO RECAPTURE USER'S PASSWORD, TO REAUTHENTICATE BEFORE RESETTING FOR SECURITY
]