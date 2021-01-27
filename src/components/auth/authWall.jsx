import React, { Component } from "react";
import Login from "./login";
import Signup from "./signup"

export default class authWall extends Component {
  //When showLogin = false, show singup
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true
    };
  }

  loginToggle = e => {
    e.preventDefault();
    this.setState({showLogin: !this.state.showLogin});
  }
  signupToggle = e => {
    e.preventDefault();
    this.setState({showLogin: !this.state.showLogin});
  }

    render() {
      return (
        <div class="text-center">
          <h1>Welcome to TokTikker</h1>
          {this.state.showLogin && <><Login/> <button class="btn btn-primary" onClick={this.signupToggle}>Signup</button></>}
          {!this.state.showLogin && <><Signup/> <button class="btn btn-primary" onClick={this.loginToggle}>Login</button></>}
        </div>
      );
    }
  }
  