import React, { Component } from "react";
import { ForgotPasswordAtLogin } from "../accountFunctions";
import Login from "./login";
import Signup from "./signup"

export default class authWall extends Component {
  //When showLogin = false, show singup
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showSignup: false,
      showPWReset: false
    };
  }

  loginToggle = e => {
    e.preventDefault();
    this.setState({
      showLogin: !this.state.showLogin,
      showSignup: false,
      showPWReset: false
    });
  }

  signupToggle = e => {
    e.preventDefault();
    this.setState({
      showLogin: false,
      showSignup: !this.state.showSignup,
      showPWReset: false
    })
  }
  resetToggle = e => {
    e.preventDefault()
    this.setState({
      showPWReset: !this.state.showPWReset,
      showLogin: false,
      showSignup: false})
  }

    render() {
      return (
        <div class="text-center container">
          
          <h1>Welcome to TokTikker</h1>
          {this.state.showLogin && <><Login/> <button class="btn btn-primary" onClick={this.signupToggle}>Signup</button></>}
          {this.state.showSignup && <><Signup/> <button class="btn btn-primary" onClick={this.loginToggle}>Login</button></>}
          {!this.state.showPWReset && <button class="btn btn-danger" onClick={this.resetToggle}>Forgot Password</button>}
          {this.state.showPWReset && <><ForgotPasswordAtLogin/>  <button class="btn btn-primary" onClick={this.loginToggle}>Login</button><button class="btn btn-primary" onClick={this.loginToggle}>Signup</button></>}
        </div>
      );
    }
  }
  