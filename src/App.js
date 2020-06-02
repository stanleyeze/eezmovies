import React, { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { session } from "./actions/auth";

import LandingPage from "./components/landing";
import ConfirmationForm from "./components/forms/Confirmation";
import LoginForm from "./components/forms/Login";
import SignUpForm from "./components/forms/Signup";
import NavBar from "./components/NavBar";
import Logout from "./components/forms/Logout";
import Search from "./components/SearchResults";
import WatchMovie from "./components/WatchMovie";

class App extends Component {
  async componentDidMount() {
    this.props.session();
  }
  render() {
    const { login } = this.props;
    const newLogin = { ...login };
    const isSignedIn = newLogin.isSignedIn;
    return (
      <div className="App">
        <React.Fragment>
          <NavBar />

          <Switch>
            <Route path="/sign-up/confirmation" component={ConfirmationForm} />
            <Route path="/sign-up" exact component={SignUpForm} />
            <Route path="/search/:querry/:page" exact component={Search} />
            <Route path="/logout" exact component={Logout} />
            <Route
              path="/movie/:id"
              component={() => <WatchMovie isSignedIn={isSignedIn} />}
            />
            <Route
              path="/login"
              component={() => <LoginForm isSignedIn={isSignedIn} />}
            />
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps, {
  session,
})(App);
