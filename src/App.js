import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/landing";
import ConfirmationForm from "./components/forms/Confirmation";
import LoginForm from "./components/forms/Login";
import SignUpForm from "./components/forms/Signup";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/sign-up/confirmation" component={ConfirmationForm} />
          <Route path="/sign-up" exact component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
