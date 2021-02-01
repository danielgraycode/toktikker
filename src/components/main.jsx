import React, {Component} from 'react'
import Logout from './auth/logout'
import { useUser } from "reactfire";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AccountManagementPage }  from './accountFunctions';

export default class Main extends Component {
    render() {
        return (
            <>
            <Nav/>
            </>
        )
    }
}
const Nav = () => {
    const user = useUser()
    return (
        <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">TokTikker</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/account/settings">Settings</Link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <p class="nav-link">Logged in as {user.data.displayName}</p>
            </li>
            <li class="nav-item mr">
                <Logout/>
            </li>
        </ul>
        </div>
    </nav>

    <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/account/settings">
            <AccountManagementPage/>
        </Route>
    </Switch>
    </Router>
    )
}