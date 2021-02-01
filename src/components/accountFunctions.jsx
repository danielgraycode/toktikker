import React, {useState} from 'react'
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth'
import MessagePopup from './messagepopup';


export const AccountManagementPage = () => {
    const firebase = useFirebaseApp();
    const user = useUser();
    const [state, updateState] = useState({
        email: user.data.email,
        message: ""
      });

    return (
        <>
        <h1>Manage your Account:</h1>
        <button class="btn btn-primary" onClick={this.changePassword}>Reset Password</button>
        {state.message && <MessagePopup message={state.message} messageSender="TokTikker"/>}
        </>
    )
}
export default AccountManagementPage

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
            <button class="btn btn-danger" type="submit">Reset Password</button>
        </form>
        </>
    )
}

const changePassword = () => [
    //SHOW POPUP TO RECAPTURE USER'S PASSWORD, TO REAUTHENTICATE BEFORE RESETTING FOR SECURITY
]